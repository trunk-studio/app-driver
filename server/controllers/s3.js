exports.upload = async (ctx) => {
  try {
    const data = ctx.request.body;
    const params = {
      Bucket: data.Bucket,
      Key: data.Key,
      Body: JSON.stringify(data.Body),
    };
    const result = await services.s3.upload(params);

    ctx.body = result ? { status: 'ok' } : { status: 'fail' };
  } catch (e) {
    ctx.body = { error: e };
  }
};
