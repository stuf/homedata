const L = require('partial.lenses');

const { dataFormat, bufAsJson } = require('./data');
const { subscribe } = require('./mqtt');
const settings = require('./settings');

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

  grouped$
    .throttle(settings.throttleDuration)
    .onValue(v => console.clear() || console.table(v));
}

module.exports = {
  main,
};
