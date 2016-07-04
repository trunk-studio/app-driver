describe('about S3 controller', () => {
  it('s3 upload api should work', async (done) => {
    try {
      const data = {
        Bucket: 'app-driver',
        Key: 'testJSON',
        Body: JSON.stringify({ test: 'testing' }),
      };
      const result = await request.post("/s3/upload").send(data);

      result.status.should.be.equal(200);

      done();
    } catch (e) {
      done(e);
    }
  });
});
