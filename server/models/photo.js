module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {

    // banner/photo photo and its source
    photoSrc: {
      type: DataTypes.STRING,
      field: 'photo_src',
    },
    photoSourceName: {
      type: DataTypes.STRING,
      field: 'photo_source_name',
    },
    photoSourceUrl: {
      type: DataTypes.STRING,
      field: 'photo_source_url',
    },
    type: {
      type: DataTypes.ENUM,
      defaultValue: 'cover',
      values: ['cover', 'extra'],
    },

  }, {
    classMethods: {
      associate: (models) => {
        Photo.belongsTo(models.Content, { through: 'content_id' });
      },
    },
    underscored: true,
  });

  return Photo;
};
