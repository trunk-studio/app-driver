
describe('allpay', () => {

  describe.only('call allpay api', done => {
    let order;
    let allpay;
    beforeEach(async(done) => {
      try {
        order = await models.Order.create({
          price: 22000,
        });
        allpay = await models.Allpay.create({
          MerchantTradeNo: 'sdkfsldfjkl23s',
          TradeAmt: 22000,
          order_id: order.id,
        });
        done();
      } catch (e) {
        console.log(e);
        done(e);
      }
    });

    afterEach(async(done) => {
      try {
        await models.Order.destroy({
          where: {
            id: order.id,
          },
        });
        await models.Allpay.destroy({
          where: {
            id: allpay.id,
          },
        });
        done();
      } catch (e) {
        console.log(e);
        done(e);
      }
    });

    it('get paymentinfo client use ATM success', async(done) => {
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

    it('client paid', async(done) => {
      try {
        const data = {
          MerchantID: '123456789',
          MerchantTradeNo: 'sdkfsldfjkl23s',
          RtnCode: '1',
          RtnMsg: 'paid',
          TradeNo: '201203151740582564',
          TradeAmt: 22000,
          PaymentDate: '2012/03/16 12:03:12',
          PaymentType: 'ATM_TAISHIN',
          PaymentTypeChargeFee: 25,
          TradeDate: '2012/03/15 17:40:58',
          SimulatePaid: 0,
          CheckMacValue: 'FD79C15859F58D0BC24CDE67F59CC81C',
        };
        const result = await request.post('/allpay/paid').send(data);
        result.status.should.be.equal(200);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
