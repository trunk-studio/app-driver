export default {
  'port': 3000,
  'domain': 'localhost',
  'serialport':  process.env.SERIALPORT || '',
  'connection': {
    'database': 'hme',
    'username': process.env.MYSQL_USER || "root",
    'password': process.env.MYSQL_PASS || "root",
    'host': process.env.MYSQL_HOST || "localhost",
    'port': process.env.MYSQL_PORT || "3306",
    'dialect': 'mysql',
    'force': false
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
