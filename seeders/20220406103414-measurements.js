'use strict';

const date = () => new Date();

/** @type {import("../global").Meta.UpDown} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('measurements', [
      {
        source: 'C4:B6:95:52:50:4B',
        sequenceNumber: 1,
        createdAt: date(),
        updatedAt: date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('measurements', null, {});
  },
};
