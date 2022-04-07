#!/usr/bin/env node
require('dotenv').config({ debug: true });

require('./cli').main();

// const L = require('partial.lenses');
// const { fromEvents, stream, fromPromise, constant } = require('kefir');
// const mqtt = require('mqtt');
// const { Sequelize, DataTypes } = require('sequelize');
// const location = require('./models/location');
// const measurement = require('./models/measurement');
// const config = require('./config/config.json');

// const cli = require('./cli');

// const sequelize = new Sequelize(config.development);

// const Measurement = measurement(sequelize, DataTypes);

// const client = mqtt.connect({ host: mqttHost, port: mqttPort });

// const connected$ = fromEvents(client, 'connect');

// const messages$ = connected$
//   .flatMap(() =>
//     stream(emitter => {
//       client.subscribe('etm12/sensor/ruuvitag/#').on('message', (t, m, p) => {
//         const d = JSON.parse(m);

//         const dʼ = L.transform(
//           L.seq(
//             [
//               L.props('temperature', 'humidity'),
//               L.values,
//               L.modifyOp(v => parseFloat(v.toFixed(6))),
//             ],
//             ['source', L.setOp(d.mac)],
//             ['time', L.modifyOp(() => new Date())],
//             ['mac', L.removeOp],
//           ),
//           d,
//         );

//         emitter.emit({
//           topic: t,
//           json: dʼ,
//         });
//       });
//     }),
//   )
//   .toProperty();

// //

// const grouped$ = messages$.scan(
//   (prev, next) => L.set(next.json.source, next.json, prev),
//   {},
// );

// const insert$ = grouped$.throttle(10000).flatMap(o => {
//   const xs = Object.values(o);

//   return fromPromise(Measurement.bulkCreate(xs));
// });

// insert$.onValue(() => {});
