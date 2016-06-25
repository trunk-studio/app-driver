const log = console.log;

exports.news = async (ctx) => {
  const request = ctx.request;
  const params = ctx.params;
  log('======request=>', request, '\n');
  log('======params=>', params, '\n');
  let result;
  try {
    result = global.services.app.getNewsById(params.id);

    ctx.body = {
      result,
    };
  } catch (e) {
    ctx.body = {
      result,
      error: e,
    };
  }
};

exports.content = async (ctx) => {
  const request = ctx.request;
  const params = ctx.params;
  log('======request=>', request, '\n');
  log('======params=>', params, '\n');
  let result;
  try {
    result = global.services.app.getContentById(params.id);

    ctx.body = {
      result,
    };
  } catch (e) {
    ctx.body = {
      result,
      error: e,
    };
  }
};
