// controllers/informeController.js
const { Evento, Inscripcion } = require('../models');

exports.generarInforme = async (req, res) => {
  try {
    const eventosPopulares = await Evento.findAll({
      include: [{
        model: Inscripcion,
        attributes: [[sequelize.fn('COUNT', sequelize.col('Inscripcion.id')), 'inscripciones']],
        group: ['Evento.id'],
      }],
      order: [[sequelize.literal('inscripciones'), 'DESC']],
    });

    res.status(200).json(eventosPopulares);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
