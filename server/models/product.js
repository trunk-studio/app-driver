module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {

        uuid: {
            type: Sequelize.UUID
        },

        // this data for which app usage
        target: DataTypes.STRING,

        // basic info
        title: DataTypes.STRING,
        type: DataTypes.STRING,
        properSeason: DataTypes.STRING,
        timeCost: DataTypes.STRING,
        difficultyLevel: DataTypes.STRING,
        description01: DataTypes.STRING,
        description02: DataTypes.STRING,

        // banner/cover photo and its source
        cover: DataTypes.STRING,
        coverSourceName: DataTypes.STRING,
        coverSourceUrl: DataTypes.STRING,

        // if this data contains extra photo
        extraPhoto: DataTypes.ARRAY,
        extraPhotoSource: DataTypes.STRING,
        extraPhotoSourceUrl: DataTypes.STRING,

        // location info
        placeFullAddress: DataTypes.STRING,
        placeDist: DataTypes.STRING,
        placeZone: DataTypes.STRING,

        // contect info
        phone: DataTypes.STRING,
        website: DataTypes.STRING,

        // geo info
        lat: DataTypes.STRING,
        lon: DataTypes.STRING,
        entryLat: DataTypes.STRING,
        entryLon: DataTypes.STRING,

    }, {
        classMethods: {
            associate: (models) => {}
        },
        underscored: true,
    });

    return Product;
};
