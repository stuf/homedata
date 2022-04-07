'use strict';

const { Model, DataTypes } = require('sequelize');

/**
 * @param {*} sequelize
 * @param {DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  class DataSource extends Model {
    static associate(models) {
      this.hasOne(models.location, {
        as: 'location_id',
      });
    }
  }

  DataSource.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.INTEGER,
      address: DataTypes.MACADDR,
    },
    {
      sequelize,
      modelName: 'data_source',
    },
  );

  return DataSource;
};
