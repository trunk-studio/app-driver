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
    allpayData.AioCheckOut = await services.allpay.getPostUrl();
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
    // allpay規定成功回傳 '1|OK'
    ctx.body = '1|OK';
  } catch (e) {
    console.log(e);
    ctx.body = '0|ErrorMessage';
  }
};

exports.paid = async (ctx) => {
  try {
    const data = ctx.request.body;
    console.log("paid => ", data);
    const allpay = await services.allpay.paid(data);
    const order = await models.Order.findById(allpay.order_id);
    order.paymentDate =  moment().format('YYYY/MM/DD HH:mm:ss');
    order.paidAccount = 'allpay';
    await order.save();
    // allpay規定成功回傳 '1|OK'
    ctx.body = '1|OK';
  } catch (e) {
    console.log(e);
    ctx.body = '0|ErrorMessage';
  }
};
