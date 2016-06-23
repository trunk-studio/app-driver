module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {

    // basic info
    title: DataTypes.STRING,
    contentType: DataTypes.STRING,
    relatedUrl: {
      type: DataTypes.STRING,
      field: 'related_url',
    },
    description: DataTypes.STRING,
    details: {
      type: DataTypes.TEXT,
      get() {
        const value = this.getDataValue('details');
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
        return this.setDataValue('details', JSON.stringify(value));
      },
    },

    // extra info
    status: DataTypes.STRING,
    season: DataTypes.STRING,
    estimatedTime: {
      type: DataTypes.FLOAT,
      field: 'estimated_time',
    },
    level: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    recommendation: DataTypes.STRING,

    // banner/cover photo and its source
    cover: DataTypes.STRING,
    coverSourceName: {
      type: DataTypes.STRING,
      field: 'cover_source_name',
    },
    coverSourceUrl: {
      type: DataTypes.STRING,
      field: 'cover_source_url',
    },

    // if this data contains extra photo
    extraPhotos: {
      field: 'extra_photos',
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
      field: 'extra_photo_sources',
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
      field: 'extra_photo_source_urls',
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
    placeFullAddress: {
      type: DataTypes.STRING,
      field: 'place_full_address',
    },
    placeDist: {
      type: DataTypes.STRING,
      field: 'place_dist',
    },
    placeZone: {
      type: DataTypes.STRING,
      field: 'place_zone',
    },

    // contect info
    phone: DataTypes.STRING,
    website: DataTypes.STRING,

    // geo info
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE,
    entryLat: {
      type: DataTypes.DOUBLE,
      field: 'entry_lat',
    },
    entryLon: {
      type: DataTypes.DOUBLE,
      field: 'entry_lon',
    },

  }, {
    classMethods: {
      associate: (models) => {
        Content.belongsTo(models.App);
      },
    },
    underscored: true,
  });

  return Content;
};
