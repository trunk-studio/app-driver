module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Report, { foreignKey: 'user_id' });
      },
    },
    underscored: true,
  });
  return User;
};
