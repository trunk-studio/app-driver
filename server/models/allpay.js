module.exports = (sequelize, DataTypes) => {
  const Allpay = sequelize.define('Allpay', {
    // 歐付寶
    // 欄位名稱統一使用歐付寶回傳資料，所以不符合其他命名規則
    // 訂單編號，提供給 allpay 使用
    // 訂單成立後更新的編號，由 allpay 提供
    TradeNo: {
      type: DataTypes.STRING,
      unique: true,
      field: 'trade_no',
    },
    MerchantTradeNo: {
      type: DataTypes.STRING,
      unique: true,
      field: 'merchant_trade_no',
    },
    // allpay 回傳資訊
    RtnCode: {
      type: DataTypes.INTEGER,
      field: 'rtn_code',
    },
    // allpay 回傳資訊
    RtnMsg: {
      type: DataTypes.STRING,
      field: 'rtn_msg',
    },
    // allpay 付款時間
    PaymentDate: {
      type: DataTypes.DATE,
      field: 'payment_date',
    },
    // allpay 交易日期
    TradeDate:{
      type: DataTypes.DATE,
      field: 'trade_date',
    },
    // allpay 採用金流方式
    PaymentType: {
      type: DataTypes.STRING,
      field: 'payment_type',
    },
    // allpay 應該要收到的付款金額
    ShouldTradeAmt: {
      type: DataTypes.FLOAT
      field: 'should_trade_amt',
    },
    // allpay 付款金額
    TradeAmt: {
      type: DataTypes.FLOAT,
      field: 'trade_amt',
    },
    // allpay bankcode
    BankCode: {
      type: DataTypes.STRING,
      field: 'bank_code',
    },
    // 要繳費的帳號
    vAccount: {
      type: DataTypes.STRING,
      field: 'v_account',
    },
    // 過期日期
    ExpireDate: {
      type: DataTypes.STRING,
      field: 'expire_date',
    },
    // 支付交易編號
    PaymentNo: {
      type: DataTypes.STRING,
      field: 'payment_no',
    },
    // allpay 交易，用於 ibon, barcode 付帳流程上
    Barcode1: {
      type: DataTypes.STRING,
      field: 'barcode1',
    },
    Barcode2: {
      type: DataTypes.STRING,
      field: 'barcode2',
    },
    Barcode3: {
      type: DataTypes.STRING,
      field: 'barcode3'
    },
    // allpay 金額產生使用
    CheckMacValue: {
      type: DataTypes.STRING,
      field: 'check_mac_value'
    },
    // 訂單產生的時候的交易時間
    MerchantTradeDate: {
      type: DataTypes.DATE,
      field: 'merchant_trade_date'
    },
  }, {
    classMethods: {
      associate: (models) => {
        Software.belongsTo(models.Report, { through: 'report_id' });
      },
    },
    underscored: true,
  });
  return Allpay;
};
