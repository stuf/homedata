'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Measurement extends Model {
    static associate(models) {
      this.hasOne(models.data_source);
    }
  }
  Measurement.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      time: {
        type: DataTypes.DATE,
        primaryKey: true,
      },
      source: DataTypes.MACADDR,
      sequenceNumber: DataTypes.INTEGER,
      temperature: DataTypes.DECIMAL,
      humidity: DataTypes.DECIMAL,
      pressure: DataTypes.INTEGER,
      rssi: DataTypes.INTEGER,
      accX: DataTypes.INTEGER,
      accY: DataTypes.INTEGER,
      accZ: DataTypes.INTEGER,
      movementCount: DataTypes.INTEGER,
      txPower: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'measurement',
      indexes: [
        { fields: ['time'] },
        { unique: true, fields: ['id'] },
        { name: 'source_per_sequence', fields: ['source', 'sequenceNumber'] },
      ],
    },
  );
  return Measurement;
};
