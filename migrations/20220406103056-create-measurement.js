'use strict';

/** @type {import("../global").Meta.UpDown} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('measurements', {
      source: {
        type: Sequelize.MACADDR,
        primaryKey: true,
      },
      sequenceNumber: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      temperature: {
        type: Sequelize.DECIMAL,
      },
      humidity: {
        type: Sequelize.DECIMAL,
      },
      pressure: {
        type: Sequelize.INTEGER,
      },
      rssi: {
        type: Sequelize.INTEGER,
      },
      accX: {
        type: Sequelize.INTEGER,
      },
      accY: {
        type: Sequelize.INTEGER,
      },
      accZ: {
        type: Sequelize.INTEGER,
      },
      movementCount: {
        type: Sequelize.INTEGER,
      },
      txPower: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('measurements');
  },
};
