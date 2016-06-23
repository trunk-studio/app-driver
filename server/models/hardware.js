module.exports = (sequelize, DataTypes) => {
  const Hardware = sequelize.define('Hardware', {
    cpu: DataTypes.STRING,
    cpuBenchmark: {
      type: DataTypes.STRING,
      field: 'cpu_benchmark',
    },
    model: DataTypes.STRING,
    modelVersion: {
      type: DataTypes.STRING,
      field: 'model_version',
    },
    ram: {
      type: DataTypes.TEXT,
      get() {
        let returnValue;
        const value = this.getDataValue('ram');
        if (value) {
          returnValue = JSON.parse(value);
        } else {
          returnValue = [];
        }
        return returnValue;
      },
      set(value) {
        console.log('value', value);
        return this.setDataValue('ram', JSON.stringify(value));
      },
    },
    networkInterface: {
      type: DataTypes.TEXT,
      field: 'network_interface',
      get() {
        let returnValue;
        const value = this.getDataValue('networkInterface');
        if (value) {
          returnValue = JSON.parse(value);
        } else {
          returnValue = [];
        }
        return returnValue;
      },
      set(value) {
        console.log('value', value);
        return this.setDataValue('networkInterface', JSON.stringify(value));
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        Hardware.belongsTo(models.Report, { through: 'report_id' });
      },
    },
    underscored: true,
  });
  return Hardware;
};
