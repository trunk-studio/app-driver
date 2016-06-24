module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {

    // basic info
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      defaultValue: 'content',
      values: ['content', 'news', 'product'],
    },
    relatedUrl: {
      type: DataTypes.STRING,
      field: 'related_url',
    },

  }, {
    classMethods: {
      associate: (models) => {
        Content.belongsTo(models.App, { through: 'app_id' });
        Content.hasMany(models.Attribute);
        Content.hasMany(models.Contact);
        Content.hasMany(models.Photo);
        Content.hasMany(models.Place);
      },
    },
    underscored: true,
  });

  return Content;
};
