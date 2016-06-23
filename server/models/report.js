module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
  }, {
    classMethods: {
      associate: (models) => {
        Report.belongsTo(models.User, { through: 'user_id' });
        Report.hasOne(models.Software);
        Report.hasOne(models.Hardware);
        Report.hasOne(models.Network);
      },
    },
    underscored: true,
  });
  return Report;
};
