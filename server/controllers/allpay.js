exports.create = async (ctx) => {
  try {
    const data = ctx.request.body;
    console.log("allpay create post => ", data);
    const order = await models.Order.create({
      price: data.totalAmount,
    });
    let allpayData = {
      relatedKeyValue: {
        order_id: order.id,
      },
      // 訂單編號
      MerchantTradeNo: Math.random().toString(36).substring(7),
      tradeDesc: 'test gen config',
      totalAmount: data.totalAmount,
      paymentMethod: 'ATM',
      itemArray: data.itemArray,
    };
    allpayData = await services.allpay.getAllpayConfig(allpayData);
    // 測試用的 url
    allpayData.AioCheckOut = 'https://payment-stage.allpay.com.tw/Cashier/AioCheckOut';
    console.log("allpayData => ", allpayData);
    ctx.render('allpay/allpay', allpayData);
  } catch (e) {
    console.log(e);
    ctx.render('error');
  }
};

exports.paymentinfo = async (ctx) => {
  try {
    const data = ctx.request.body;
    console.log("paymentinfo => ", data);
    const paymentinfo = await services.allpay.paymentinfo(data);
    const order = await models.Order.findById(paymentinfo.order_id);
    if (order.price === data.TradeAmt) {
      order.bankCode = data.BankCode;
      order.paidAccount = data.vAccount;
      await order.save();
    }
    // allpay規定成功回傳 '1|OK'
    ctx.body = '1|OK';
  } catch (e) {
    console.log(e);
    ctx.body = '0|ErrorMessage';
  }
};
