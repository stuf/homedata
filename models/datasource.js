'use strict';

const { Model } = require('sequelize');

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
    },
    {
      sequelize,
      modelName: 'dataSource',
    },
  );

  return DataSource;
};
