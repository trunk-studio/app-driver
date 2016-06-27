describe.only('about report model operation.', () => {
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
        trade_no: '201203151740582564',
        merchant_trade_no: '2000132816da8db1',
        rtn_code: 1,
        rtn_msg: 'paid',
        payment_date: '2012-03-16 04:03:12',
        payment_type: 'ATM_TAISHIN',
        trade_amt: 22000,
        order_id: order.id,
      });
      // await order.addContent(contents.id);
      console.log(JSON.stringify(order, null, 2));
      done();
    } catch (e) {
      console.log(e);
      done(e)
    }
  });
});
