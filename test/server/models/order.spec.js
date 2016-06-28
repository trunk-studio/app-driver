describe.only('about order model operation.', () => {
  it('create report should success.', async (done) => {
    try {
      const content = await models.Content.create({
        title: 'AAA',
        description: 'VVV',
        type: 'content',
        app_id: null,
      });
      const order = await models.Order.create({
        paymentDate: '2012-03-16 04:03:12',
        price: 22000,
        paidAccount: '9103522175887271',
        content_id: content.id,
      });
      const allpay = await models.Allpay.create({
        RtnCode: 1000,
        TradeAmt: 22000,
        order_id: order.id,
      });
      console.log(JSON.stringify(allpay, null, 2));
      done();
    } catch (e) {
      console.log(e);
      done(e)
    }
  });
});
