const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./models').sequelize;
const eventoRoutes = require('./routes/eventoRoutes');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api', eventoRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT || 3000}`);
  });
});
