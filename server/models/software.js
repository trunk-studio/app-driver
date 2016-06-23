module.exports = (sequelize, DataTypes) => {
  const Software = sequelize.define('Software', {
    china360: DataTypes.STRING,
    chrome: DataTypes.STRING,
    firefox: DataTypes.STRING,
    flash: DataTypes.STRING,
    ie: DataTypes.STRING,
    safari: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Software.belongsTo(models.Report, { through: 'report_id' });
      },
    },
    underscored: true,
  });
  return Software;
};
