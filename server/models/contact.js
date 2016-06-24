module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {

    // contect info
    phone: DataTypes.STRING,
    website: DataTypes.STRING,
    email: DataTypes.STRING,
    name: DataTypes.STRING,

  }, {
    classMethods: {
      associate: (models) => {
        Contact.belongsTo(models.Content, { through: 'content_id' });
      },
    },
    underscored: true,
  });

  return Contact;
};
