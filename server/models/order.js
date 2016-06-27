module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    paymentDate: {
      type: DataTypes.DATE,
      field: 'payment_date',
    },
    price: {
      type: DataTypes.FLOAT,
      field: 'should_trade_amt',
    },
    paidAccount: {
      type: DataTypes.STRING,
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
