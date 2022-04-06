'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class measurement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.DataSource);
    }
  }
  measurement.init(
    {
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
      underscored: true,
    },
  );
  return measurement;
};
