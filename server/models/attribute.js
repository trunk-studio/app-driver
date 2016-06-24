module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('Attribute', {

    // extra info
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    season: DataTypes.STRING,
    level: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    sightseeing: DataTypes.STRING,
    rss: {
      type: DataTypes.STRING,
      field: 'rss_source',
    },
    infos: {
      type: DataTypes.TEXT,
      field: 'infos',
      get() {
        let returnValue;
        const value = this.getDataValue('infos');
        if (value) {
          returnValue = JSON.parse(value);
        } else {
          returnValue = [];
        }
        return returnValue;
      },
      set(value) {
        console.log('value', value);
        return this.setDataValue('infos', JSON.stringify(value));
      },
    },

  }, {
    classMethods: {
      associate: (models) => {
        Attribute.belongsTo(models.Content, { through: 'content_id' });
      },
    },
    underscored: true,
  });

  return Attribute;
};
