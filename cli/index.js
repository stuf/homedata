const { constant, fromPromise } = require('kefir');
const L = require('partial.lenses');

const { dataFormat, bufAsJson } = require('./data');
const { subscribe } = require('./mqtt');
const settings = require('./settings');
const { Measurement } = require('./models');

function main() {
  const json$ = subscribe('etm12/sensor/ruuvitag/#').map(
    L.get(['payload', bufAsJson, dataFormat]),
  );

  // Group received telemetry into an object, so we can
  // apply throttling and/or buffering to database inserts.
  const grouped$ = json$.scan(
    (prev, next) => L.set(next.source, next, prev),
    {},
  );

  const insert$ = grouped$.throttle(settings.throttleDuration).flatMap(o => {
    const xs = Object.values(o);

    return fromPromise(Measurement.bulkCreate(xs));
  });

  // Finally, activate pipeline to make the magic happen
  insert$.observe({
    error: err => {
      console.error('Error:', err);
    },
    value: v => {
      console.log('got %s values', v.length);
    },
  });
}

module.exports = {
  main,
};
