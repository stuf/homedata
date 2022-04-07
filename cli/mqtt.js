const { Property, fromEvents, stream, constantError } = require('kefir');
const mqtt = require('mqtt');
const settings = require('./settings');

const client = mqtt.connect({
  host: settings.mqttHost,
  port: settings.mqttPort,
});

/** @type {Stream<mqtt.IConnackPacket, any>} */
const connected$ = fromEvents(client, 'connect').toProperty();

/** @type {Property<never, Error>} */
const error$ = fromEvents(client, 'err').flatMap(constantError).toProperty();

/**
 * @param {string} topic
 * @returns
 */
function subscribe(topic) {
  /** @type {Property<MqttMessage, any>} */
  const msg$ = stream(e => {
    client.subscribe(topic).on('message', (t, m, p) => {
      e.emit({ topic: t, payload: m, packet: p });
    });
  }).toProperty();

  return msg$;
}

module.exports = {
  subscribe,

  error$,
  connected$,
};

/**
 * @typedef {object} MqttMessage
 * @prop {topic} string
 * @prop {Buffer} payload
 * @prop {mqtt.IPublishPacket} packet
 */
