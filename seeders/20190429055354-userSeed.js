'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: "Sasuke",
        password: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Naruto",
        password: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
