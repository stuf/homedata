'use strict';

/** @type {import("../global").Meta.UpDown} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        key: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        key: 'updated_at',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locations');
  },
};
