import AllpayService from './allpay';
export default class Services {

  constructor() {
    // this.main = new MainService();
    this.allpay = new AllpayService({
      merchantID: '2000132',
      hashKey: '5294y06JbISpM5x9',
      hashIV: 'v77hoKGq4kWxNNIS',
      debug: true,
      prod: false,
      ReturnURL: '/allpay/paid',
      ClientBackURL: '/shop/done',
      PaymentInfoURL: '/allpay/paymentinfo',
      allpayModel: models.Allpay,
    });
  }

}
