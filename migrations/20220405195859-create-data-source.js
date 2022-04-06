'use strict';

/** @type {import("../global").Meta.UpDown} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dataSources', {
      address: {
        primaryKey: true,
        unique: true,
        type: Sequelize.MACADDR,
      },
      name: {
        type: Sequelize.STRING,
      },
      location: {
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
    await queryInterface.dropTable('dataSources');
  },
};
