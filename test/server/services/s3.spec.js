import AWS from 'aws-sdk';

describe('about S3 service', () => {
  const params = {
    Bucket: 'app-driver',
    Key: 'testfile',
    Body: JSON.stringify({ test: 'testing' }),
  };
  const s3 = new AWS.S3();
  const putObjectPromise = s3.putObject(params).promise();

  it('JSON object should be uploaded successfully by invoking service', async (done) => {
    try {
      const result = await putObjectPromise.then(() => {
        console.log('uploaded!');
        return true;
      }).catch((e) => {
        console.log('upload error:', e);
        return false;
      });

      result.should.be.equals(true);

      done();
    } catch (e) {
      done(e);
    }
  });
});
