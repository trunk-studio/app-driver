
describe('allpay', () => {

  describe('call allpay api', done => {

    before(async(done) => {
      try {
        const order = await models.Order.create({
          price: 22000,
        });
        await models.Allpay.create({
          MerchantTradeNo: 'sdkfsldfjkl23s',
          order_id: order.id,
        });
        done();
      } catch (e) {
        console.log(e);
        done(e);
      }
    });

    it.only('get paymentinfo client use ATM success', async(done) => {
      try {
        const data = {
          MerchantID: '123456789',
          MerchantTradeNo: 'sdkfsldfjkl23s',
          RtnCode: '2',
          RtnMsg: 'Get VirtualAccount Succeeded',
          TradeNo: 'sdkfsldfjkl23',
          TradeAmt: 22000,
          PaymentType: 'ATM_TAISHIN',
          TradeDate: '2012/03/15 17:40:58',
          CheckMacValue: '18196F5D22DB1D0E2B4858C2B1719F40',
          BankCode: '812',
          vAccount: '9103522175887271',
          ExpireDate: '2013/12/16',
        };
        const result = await request.post('/allpay/paymentinfo').send(data);
        result.status.should.be.equal(200);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
