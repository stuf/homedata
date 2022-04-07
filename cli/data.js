const L = require('partial.lenses');

const toString = x => x.toString();

const numFix = n => parseFloat(n.toFixed(6));

const dataFormat = L.pick({
  source: 'mac',
  sequenceNumber: 'sequenceNumber',
  temperature: ['temperature', L.reread(numFix)],
  humidity: ['humidity', L.reread(numFix)],
  pressure: 'pressure',
  rssi: 'rssi',
  accX: 'accX',
  accY: 'accY',
  accZ: 'accZ',
  movementCount: 'movementCount',
  battery: 'battery',
  txPower: 'txPower',
  time: L.reread(() => new Date()),
});

const bufAsJson = [L.reread(toString), L.json()];

module.exports = {
  toString,
  numFix,
  dataFormat,
  bufAsJson,
};
