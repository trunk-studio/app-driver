exports.create = async (ctx) => {
  try {
    const data = ctx.request.body;
    console.log("allpay create post", data);
    const content = await models.Content.create({
      title: data.title,
    });
    let allpayData = {
      relatedKeyValue: {
        content_id: content.id,
      },
      // 訂單編號
      MerchantTradeNo: Math.random().toString(36).substring(7),
      tradeDesc: 'test gen config',
      totalAmount: data.totalAmount,
      paymentMethod: 'ATM',
      itemArray: data.itemArray,
    };
    allpayData = await services.allpay.getAllpayConfig(allpayData);
    allpayData.AioCheckOut = 'https://payment-stage.allpay.com.tw/Cashier/AioCheckOut';
    ctx.render('allpay/allpay', allpayData);
  } catch (e) {
    console.log(e);
  }
};
