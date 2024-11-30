'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Juan Pérez',
        email: 'juanperez@example.com',
        password: '12345', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Ana Gómez',
        email: 'anagomez@example.com',
        password: '12345', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
