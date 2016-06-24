module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {

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

    // place info
    fullAddress: {
      type: DataTypes.STRING,
      field: 'place_full_address',
    },
    dist: {
      type: DataTypes.STRING,
      field: 'place_dist',
    },
    zone: {
      type: DataTypes.STRING,
      field: 'place_zone',
    },

  }, {
    classMethods: {
      associate: (models) => {
        Place.belongsTo(models.Content, { through: 'content_id' });
      },
    },
    underscored: true,
  });

  return Place;
};
