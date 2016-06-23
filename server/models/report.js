module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    audio: DataTypes.STRING,
    video: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Report.hasOne(models.Software);
        Report.hasOne(models.Hardware);
        Report.hasMany(models.Network);
      },
    },
    underscored: true,
  });
  return Report;
};
