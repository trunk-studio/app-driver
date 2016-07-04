import AWS from 'aws-sdk';

export default class S3 {
  constructor({
      debug = true,
    }) {
    this.debug = debug;
  }

  async upload(params) {
    const s3 = new AWS.S3();
    const putObjectPromise = s3.putObject(params).promise();

    return await putObjectPromise.then(() => {
      console.log('uploaded!');
      return true;
    }).catch((e) => {
      console.log('upload error:', e);
      return false;
    });
  }
}
