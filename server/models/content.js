module.exports = (sequelize, DataTypes) => {
  var Content = sequelize.define('Content', {

      uuid: {
          type: DataTypes.UUID
      },

      // this data for which app usage
      target: DataTypes.STRING,

      // basic info
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      season: DataTypes.STRING,
      EstimatedTime: DataTypes.STRING,
      level: DataTypes.STRING,
      length: DataTypes.STRING,
      status: DataTypes.STRING,
      status: DataTypes.STRING,
      detail:{
        type: DataTypes.STRING,
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
      description:{
        type: DataTypes.STRING,
        get() {
          let value;
          let returnValue;
          if (value === this.getDataValue('description')) {
            returnValue = JSON.parse(value);
          } else {
            returnValue = [];
          }
          return returnValue;
        },
        set(value) {
          console.log('value', value);
          return this.setDataValue('description', JSON.stringify(value));
        },
      },

      // banner/cover photo and its source
      cover: DataTypes.STRING,
      coverSourceName: DataTypes.STRING,
      coverSourceUrl: DataTypes.STRING,

      // if this data contains extra photo
      extraPhoto: DataTypes.STRING,
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

  return Content;
};
