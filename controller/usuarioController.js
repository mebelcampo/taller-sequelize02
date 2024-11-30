const { Usuario } = require('../models');

exports.createUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) return res.status(400).json({ message: 'El usuario ya existe' });

    const usuario = await Usuario.create({ nombre, email, password });
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
