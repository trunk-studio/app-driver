const log = console.log;

exports.getNews = async (ctx) => {
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

exports.getContent = async (ctx) => {
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

// TODO
exports.getAppList = async (ctx) => {
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

// TODO
exports.createApp = async (ctx) => {
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
