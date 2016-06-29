module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    paymentDate: {
      type: DataTypes.DATE,
      field: 'payment_date',
    },
    price: {
      type: DataTypes.FLOAT,
      field: 'price',
    },
    bankCode: {
      type: DataTypes.STRING(3),
      field: 'bank_code',
    },
    paidAccount: {
      type: DataTypes.STRING(16),
      field: 'paid_account',
    },
  }, {
    classMethods: {
      associate: (models) => {
        Order.belongsTo(models.Content, { through: 'content_id' });
        Order.hasOne(models.Allpay);
      },
    },
    underscored: true,
  });
  return Order;
};
