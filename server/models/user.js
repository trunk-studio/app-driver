module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
      },
    },
    underscored: true,
  });
  return User;
};
