
module.exports = (sequelize, DataTypes) => {
  const Evento = sequelize.define('Evento', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacidadMaxima: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

  Evento.associate = (models) => {
    Evento.hasMany(models.Inscripcion, { foreignKey: 'eventoId' });
  };

  return Evento;
};
