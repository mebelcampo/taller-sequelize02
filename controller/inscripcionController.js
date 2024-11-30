exports.inscribirEnEvento = async (req, res) => {
  const { eventoId } = req.body;
  const usuarioId = req.usuarioId;  

  try {
    const evento = await Evento.findByPk(eventoId);
    if (!evento) return res.status(404).json({ message: 'Evento no encontrado' });

    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    const inscripciones = await Inscripcion.count({ where: { eventoId } });
    if (inscripciones >= evento.capacidadMaxima) {
      return res.status(400).json({ message: 'Evento lleno' });
    }

    const inscripcion = await Inscripcion.create({ eventoId, usuarioId });
    res.status(201).json(inscripcion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

