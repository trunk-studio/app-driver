import AWS from 'aws-sdk';

describe.only('about S3 service', () => {
  const params = {
    Bucket: 'app-driver',
    Key: 'testfile',
    Body: JSON.stringify({ test: 'testing' }),
  };

  const s3 = new AWS.S3();
  const putObjectPromise = s3.putObject(params).promise();

  it('file should be uploaded to s3 successfully', async (done) => {
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
