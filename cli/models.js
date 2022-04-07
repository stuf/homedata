const { Sequelize, DataTypes } = require('sequelize');
const sqlConfig = require('../config/config.json');

const measurement = require('../models/measurement');
const location = require('../models/location');
const dataSource = require('../models/datasource');

const env = process.env.NODE_ENV || 'development';
const config = sqlConfig[env];

const sequelize = new Sequelize(config);

//
// Initialize models with a Sequelize instance so that they can be
// used whereever.
const Location = location(sequelize, DataTypes);
const DataSource = dataSource(sequelize, DataTypes);
const Measurement = measurement(sequelize, DataTypes);

module.exports = {
  Location,
  DataSource,
  Measurement,
};
