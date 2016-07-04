import AllpayService from './allpay';
import config from '../config/init';
const { debug, prod, merchantID, hashKey, hashIV, domain } = config.allpay;
import S3Service from './s3';

export default class Services {
  constructor() {
    // this.main = new MainService();
    this.allpay = new AllpayService({
      merchantID,
      hashKey,
      hashIV,
      debug,
      prod,
      ReturnURL: '/allpay/paid',
      ClientBackURL: '/shop/done',
      PaymentInfoURL: '/allpay/paymentinfo',
      allpayModel: models.Allpay,
      domain,
    });
    this.s3 = new S3Service({
      debug: true,
    });
  }
}
