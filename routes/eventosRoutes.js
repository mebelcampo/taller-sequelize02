const express = require('express');
const inscripcionController = require('../controllers/inscripcionController');

const router = express.Router();

// Ruta para inscribirse en un evento
router.post('/inscripcion', inscripcionController.inscribirEnEvento);

module.exports = router;
