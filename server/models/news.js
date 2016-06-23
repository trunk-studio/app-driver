module.exports = (sequelize, DataTypes) => {
    var News = sequelize.define('News', {

        rss: DataTypes.STRING,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        time: DataTypes.STRING,
        url: DataTypes.STRING,

    }, {
        classMethods: {
            associate: (models) => {
                News.belongsTo(models.App, {
                    // hooks: true,
                });
            }
        },
        // underscored: true,
        underscoredAll: true,
    });

    return News;
};
