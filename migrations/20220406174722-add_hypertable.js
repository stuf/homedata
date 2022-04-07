'use strict';

/** @type {import("../global").Meta.UpDown} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "SELECT create_hypertable('measurements', 'time');",
    );
  },

  async down(queryInterface, Sequelize) {},
};
