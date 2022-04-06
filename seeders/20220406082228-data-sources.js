'use strict';

const date = () => new Date();

/** @type {import("../global").Meta.UpDown} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'dataSources',
      [
        {
          address: 'C4:B6:95:52:50:4B',
          name: 'Kitchen (A)',
          location: 5,
        },
        {
          address: 'E8:53:A8:29:39:AF',
          name: 'Bathroom (B)',
          location: 2,
        },
        {
          address: 'F2:0B:12:DD:BD:D9',
          name: 'Living Room, Balcony (C)',
          location: 4,
        },
        {
          address: 'F5:1F:89:90:35:27',
          name: 'Living Room, Detolf (D)',
          location: 4,
        },
        {
          address: 'D8:8E:3D:A1:64:83',
          name: 'Office (E)',
          location: 3,
        },
        {
          address: 'E2:51:F7:EF:B3:84',
          name: 'Balcony (F)',
          location: 7,
        },
      ].map(it =>
        Object.assign({}, it, { createdAt: date(), updatedAt: date() }),
      ),
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dataSources', null, {});
  },
};
