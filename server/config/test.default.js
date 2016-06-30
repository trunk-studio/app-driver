export default {
  'port': 3001,
  'serialport':  process.env.SERIALPORT || '',
  'connection': {
    'dialect': 'sqlite',
    'storage': './db.development.sqlite',
    'username': null,
    'password': null,
    'database': null,
    'force': true
  },
  accessKey: '',
  secretAccessKey: '',
  allpay: {
    debug: true,
    prod: false,
    merchantID: '2000132',
    hashKey: '5294y06JbISpM5x9',
    hashIV: 'v77hoKGq4kWxNNIS',
    domain: 'http://localhost:1337',
  },
};
