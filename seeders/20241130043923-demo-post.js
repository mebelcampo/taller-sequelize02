'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Eventos', [
      {
        nombre: 'Conferencia de Tecnología',
        descripcion: 'Un evento sobre las últimas tendencias en tecnología.',
        fecha: new Date('2024-12-15T10:00:00Z'),
        lugar: 'Auditorio Principal',
        capacidadMaxima: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Taller de Desarrollo Web',
        descripcion: 'Un taller interactivo sobre desarrollo web moderno.',
        fecha: new Date('2024-12-20T09:00:00Z'),
        lugar: 'Sala de Conferencias A',
        capacidadMaxima: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Eventos', null, {});
  }
};
