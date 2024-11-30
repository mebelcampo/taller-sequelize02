// controllers/eventoController.js
const { Evento } = require('../models');

exports.createEvento = async (req, res) => {
  const { nombre, descripcion, fecha, lugar, capacidadMaxima } = req.body;
  try {
    const evento = await Evento.create({ nombre, descripcion, fecha, lugar, capacidadMaxima });
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateEvento = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, fecha, lugar, capacidadMaxima } = req.body;
  try {
    const evento = await Evento.findByPk(id);
    if (!evento) return res.status(404).json({ message: 'Evento no encontrado' });
    evento.nombre = nombre || evento.nombre;
    evento.descripcion = descripcion || evento.descripcion;
    evento.fecha = fecha || evento.fecha;
    evento.lugar = lugar || evento.lugar;
    evento.capacidadMaxima = capacidadMaxima || evento.capacidadMaxima;
    await evento.save();
    res.status(200).json(evento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteEvento = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await Evento.findByPk(id);
    if (!evento) return res.status(404).json({ message: 'Evento no encontrado' });
    await evento.destroy();
    res.status(200).json({ message: 'Evento eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
