module.exports = (sequelize, DataTypes) => {
  var Content = sequelize.define('Content', {

      // app bundle id
      bundleId: DataTypes.STRING,

      // basic info
      title: DataTypes.STRING,
      contentType: DataTypes.STRING,
      season: DataTypes.STRING,
      EstimatedTime: DataTypes.STRING,
      level: DataTypes.STRING,
      length: DataTypes.STRING,
      status: DataTypes.STRING,
      status: DataTypes.STRING,
      description: DataTypes.STRING,
      details:{
        type: DataTypes.TEXT,
        get() {
          let value;
          let returnValue;
          if (value === this.getDataValue('detail')) {
            returnValue = JSON.parse(value);
          } else {
            returnValue = [];
          }
          return returnValue;
        },
        set(value) {
          console.log('value', value);
          return this.setDataValue('detail', JSON.stringify(value));
        },
      },

      // banner/cover photo and its source
      cover: DataTypes.STRING,
      coverSourceName: DataTypes.STRING,
      coverSourceUrl: DataTypes.STRING,

      // if this data contains extra photo
      extraPhotos:{
        type: DataTypes.TEXT,
        get() {
          let value;
          let returnValue;
          if (value === this.getDataValue('extraPhoto')) {
            returnValue = JSON.parse(value);
          } else {
            returnValue = [];
          }
          return returnValue;
        },
        set(value) {
          console.log('value', value);
          return this.setDataValue('extraPhoto', JSON.stringify(value));
        },
      },
      extraPhotoSources:{
        type: DataTypes.TEXT,
        get() {
          let value;
          let returnValue;
          if (value === this.getDataValue('extraPhotoSource')) {
            returnValue = JSON.parse(value);
          } else {
            returnValue = [];
          }
          return returnValue;
        },
        set(value) {
          console.log('value', value);
          return this.setDataValue('extraPhotoSource', JSON.stringify(value));
        },
      },
      extraPhotoSourceUrls:{
        type: DataTypes.TEXT,
        get() {
          let value;
          let returnValue;
          if (value === this.getDataValue('extraPhotoSourceUrl')) {
            returnValue = JSON.parse(value);
          } else {
            returnValue = [];
          }
          return returnValue;
        },
        set(value) {
          console.log('value', value);
          return this.setDataValue('extraPhotoSourceUrl', JSON.stringify(value));
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

  return Content;
};
