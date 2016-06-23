module.exports = (sequelize, DataTypes) => {
    var Content = sequelize.define('Content', {

        // basic info
        title: DataTypes.STRING,
        contentType: DataTypes.STRING,
        relatedUrl: DataTypes.STRING,
        description: DataTypes.STRING,
        details: {
            type: DataTypes.TEXT,
            get() {
                let value;
                let returnValue;
                if (value = this.getDataValue('details')) {
                    returnValue = JSON.parse(value);
                } else {
                    returnValue = [];
                }
                return returnValue;
            },
            set(value) {
                console.log('value', value);
                return this.setDataValue('details', JSON.stringify(value));
            },
        },

        // extra info
        status: DataTypes.STRING,
        season: DataTypes.STRING,
        EstimatedTime: DataTypes.FLOAT,
        level: DataTypes.FLOAT,
        length: DataTypes.FLOAT,
        recommendation: DataTypes.STRING,

        // banner/cover photo and its source
        cover: DataTypes.STRING,
        coverSourceName: DataTypes.STRING,
        coverSourceUrl: DataTypes.STRING,

        // if this data contains extra photo
        extraPhotos: {
            type: DataTypes.TEXT,
            get() {
                const value = this.getDataValue('extraPhotos');
                let returnValue;
                if (value) {
                    returnValue = JSON.parse(value);
                } else {
                    returnValue = [];
                }
                return returnValue;
            },
            set(value) {
                console.log('value', value);
                return this.setDataValue('extraPhotos', JSON.stringify(value));
            },
        },
        extraPhotoSources: {
            type: DataTypes.TEXT,
            get() {
                const value = this.getDataValue('networkInterface');
                let returnValue;
                if (value) {
                    returnValue = JSON.parse(value);
                } else {
                    returnValue = [];
                }
                return returnValue;
            },
            set(value) {
                console.log('value', value);
                return this.setDataValue('extraPhotoSources', JSON.stringify(value));
            },
        },
        extraPhotoSourceUrls: {
            type: DataTypes.TEXT,
            get() {
                const value = this.getDataValue('extraPhotoSourceUrls');
                let returnValue;
                if (value) {
                    returnValue = JSON.parse(value);
                } else {
                    returnValue = [];
                }
                return returnValue;
            },
            set(value) {
                console.log('value', value);
                return this.setDataValue('extraPhotoSourceUrls', JSON.stringify(value));
            },
        },

        // place info
        placeFullAddress: DataTypes.STRING,
        placeDist: DataTypes.STRING,
        placeZone: DataTypes.STRING,

        // contect info
        phone: DataTypes.STRING,
        website: DataTypes.STRING,

        // geo info
        lat: DataTypes.DOUBLE,
        lon: DataTypes.DOUBLE,
        entryLat: DataTypes.DOUBLE,
        entryLon: DataTypes.DOUBLE,

    }, {
        classMethods: {
            associate: (models) => {
                Content.belongsTo(models.App, {
                    // hooks: true,
                });
            }
        },
        // underscored: true,
        underscoredAll: true,
    });

    return Content;
};
