'use strict';

/**
 * @type {import("../global").Meta.UpDown}
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;',
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.sequelize.query('DROP EXTENSION timescaledb;');
  },
};
