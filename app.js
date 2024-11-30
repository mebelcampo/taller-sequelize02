const express = require('express');
const dotenv = require('dotenv');
const eventoRoutes = require('./routes/eventoRoutes');
const sequelize = require('./models').sequelize;

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', eventoRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });
});
