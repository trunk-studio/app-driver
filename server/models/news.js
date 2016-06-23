module.exports = (sequelize, DataTypes) => {
  var Activity = sequelize.define('Activity', {

    uuid: {
      type: DataTypes.UUID
    },

    // for app
    target: DataTypes.STRING,

    rss: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.STRING,
    url: DataTypes.STRING,

  }, {
    classMethods: {
      associate: (models) => {
      }
    }
  });

  return Activity;
};
