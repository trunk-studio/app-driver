exports.upload = async (ctx, params) => {
  try {
    const result = await services.s3.upload(params);
    ctx.body = result ? { status: 'ok' } : { status: 'fail' };
  } catch (e) {
    ctx.body = { error: e };
  }
};
