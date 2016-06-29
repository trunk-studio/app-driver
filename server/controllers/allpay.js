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
  }
};
