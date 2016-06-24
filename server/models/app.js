module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define('App', {

    bundleId: {
      type: DataTypes.STRING,
      field: 'bundle_id',
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    urlLandingPage: {
      type: DataTypes.STRING,
      field: 'url_landing_page',
    },
    urlAppStore: {
      type: DataTypes.STRING,
      field: 'url_app_store',
    },
    urlPlayStore: {
      type: DataTypes.STRING,
      field: 'url_play_store',
    },

  }, {
    classMethods: {
      associate: (models) => {
        App.hasMany(models.Content);
      },
    },
    underscored: true,
  });

  return App;
};
