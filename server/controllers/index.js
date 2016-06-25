import Router from 'koa-router';
// import fs from 'fs';
// import path from 'path';
import fetch from 'node-fetch';
import reportController from './report';
import appController from './app';

// const aws = require('aws-sdk');
// const crypto = require("crypto");

export default class Routes {
  constructor(app, passport) {
    const router = new Router();
    this.router = router;
    this.app = app;
    // this.authController = new AuthController(passport);
    // this.couponController = new CouponController();
    this.passport = passport;
  }

  setupPublicRoute() {
    const app = this.app;
    const publicRoute = new Router();

    publicRoute.get('/', (ctx) => {
      ctx.redirect('/s3/upload');
    });

    publicRoute.get('/s3/upload', (ctx) => {
      ctx.render('s3/upload', { accessKey: appConfig.accessKey });
    });

    publicRoute.get('/lambda/echo', async (ctx) => {
      const res = await fetch(
        appConfig.lambdaApiEndpoint,
        { method: 'POST', body: '{"operation":"echo", "payload":"Hello World"}' }
      );
      ctx.body = await res.json();
    });

    publicRoute.post('/lambda/transcoder', async (ctx) => {
      try {
        const res = await fetch(
          appConfig.lambdaApiEndpoint,
          {
            method: 'POST',
            body: JSON.stringify({ operation: 'transcoder', payload: ctx.request.body }),
          },
        );
        ctx.body = await res.json();
      }
      catch (e) {
        ctx.body = { error: e };
      }
    });

    publicRoute.post('/lambda/signature', async (ctx) => {
      try {
        const res = await fetch(
          appConfig.lambdaApiEndpoint,
          {
            method: 'POST',
            body: JSON.stringify({ operation: 'signature', payload: ctx.request.body }),
          }
        );
        ctx.body = await res.json();
      }
      catch (e) {
        ctx.body = { error: e };
      }
    });

    publicRoute.post('/report', reportController.report);

    // app controller
    publicRoute.get('/rest/app/:id/news', appController.news);
    publicRoute.get('/rest/app/:id/content', appController.content);

    app.use(publicRoute.middleware())

    // app.use(function(ctx, next) {
    //   if (ctx.isAuthenticated()) {
    //     return next()
    //   } else {
    //     ctx.redirect('/')
    //   }
    // })

    // app.use(route.get('/app', function(ctx) {
    //
    // }))
  }

  setupAppRoute() {
    this.app.use(this.router.middleware());
  }
}
