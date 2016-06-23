module.exports = (sequelize, DataTypes) => {
    var App = sequelize.define('App', {

        bundleId: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        urlLandingPage: DataTypes.STRING,
        urlAppStore: DataTypes.STRING,
        urlPlayStore: DataTypes.STRING,

    }, {
        classMethods: {
            associate: (models) => {
                App.hasOne(models.Content, {
                    // hooks: true,
                });
                App.hasOne(models.News, {
                    // hooks: true,
                });
            },
            // underscored: true,
            underscoredAll: true,
        },
    });

    return App;
};
