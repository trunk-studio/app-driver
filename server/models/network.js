module.exports = (sequelize, DataTypes) => {
  const Network = sequelize.define('Network', {
    ip: DataTypes.STRING,
    ping: DataTypes.STRING,
    upload: DataTypes.STRING,
    download: DataTypes.STRING,
    traceRoute: {
      type: DataTypes.TEXT,
      field: 'trace_route',
      get() {
        let returnValue;
        const value = this.getDataValue('traceRoute');
        if (value) {
          returnValue = JSON.parse(value);
        } else {
          returnValue = [];
        }
        return returnValue;
      },
      set(value) {
        console.log('value', value);
        return this.setDataValue('traceRoute', JSON.stringify(value));
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        Network.belongsTo(models.Report, { through: 'report_id' });
      },
    },
    underscored: true,
  });
  return Network;
};
