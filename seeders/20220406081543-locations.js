'use strict';

const { Op } = require('sequelize');

const date = () => new Date();

/**
 * @type {import("../global").Meta.UpDown}
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'locations',
      [
        { id: 1, name: 'Entry' },
        { id: 2, name: 'Bathroom' },
        { id: 3, name: 'Office' },
        { id: 4, name: 'Living Room' },
        { id: 5, name: 'Kitchen' },
        { id: 6, name: 'Bedroom' },
        { id: 7, name: 'Balcony' },
      ].map(it =>
        Object.assign({}, it, { createdAt: date(), updatedAt: date() }),
      ),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  },
};
