module.exports = (sequelize, DataTypes) => {
  var News = sequelize.define('News', {

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

  return News;
};
