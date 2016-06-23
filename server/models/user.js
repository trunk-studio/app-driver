module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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
