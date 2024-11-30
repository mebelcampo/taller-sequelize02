module.exports = (sequelize, DataTypes) => {
    const Inscripcion = sequelize.define('Inscripcion', {
      eventoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Eventos',
          key: 'id'
        },
        allowNull: false
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuarios',  
          key: 'id'
        },
        allowNull: false
      },
    });
  
    Inscripcion.associate = (models) => {
      Inscripcion.belongsTo(models.Evento, { foreignKey: 'eventoId' });
      Inscripcion.belongsTo(models.Usuario, { foreignKey: 'usuarioId' }); 
    };
  
    return Inscripcion;
  };
  