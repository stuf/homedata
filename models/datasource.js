'use strict';

const { Model, DataTypes } = require('sequelize');

/**
 *
 * @param {*} sequelize
 * @param {DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  class DataSource extends Model {
    static associate(models) {
      this.hasOne(models.Location);
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
      modelName: 'dataSource',
      underscored: true,
    },
  );

  return DataSource;
};
