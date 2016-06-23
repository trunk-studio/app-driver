module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {

    rss: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.STRING,
    url: DataTypes.STRING,

  }, {
    classMethods: {
      associate: (models) => {
        News.belongsTo(models.App);
      },
    },
    underscored: true,
  });

  return News;
};
