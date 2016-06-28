describe('appController', () => {
  describe('API Test', (done) => {
    let testNews;
    let testContent;

    before(async (done) => {
      try {
        testNews = {
          ukey: '21n3b123b123h12jb31',
          time: 212132334345345,
          type: 'news',
          rss: 'http://recreation.forest.gov.tw/rss_news.aspx?id=News',
          list: [{
            title: 'TEST墾丁國家公園環境教育校外教學活動',
            time: null,
            url: 'http://ezgo.coa.gov.tw/ezgo_Rec/Home/_NEWS_M/244',
            description: 'TEST達到環境與生態教育之目的，進一步促使學習者珍愛台灣環境生態。',
          }],
        };

        testContent = {
          ukey: '21n3b123b123h12jb31',
          time: 212132334345345,
          type: 'content',
          list: [{
            id: 1,
            place: '台中市東勢區',
            title: 'TEST阿布拉觀光果園',
            cover: 'http://9.share.photo.xuite.net/evelyn_9699/19ac61d/10406107/479450178_m.jpg',
            coverSourceUrl: 'http://blog.xuite.net/evelyn_9699/twblog/127158869-980507-%E5%8F%B0%E4%B8%AD%E4%B8%80%E6%97%A5%E9%81%8A%EF%BC%88%E8%BB%9F%E5%9F%A4%E5%9D%91%E4%BC%91%E9%96%92%E8%BE%B2%E6%A5%AD%E5%8D%80-%E7%9F%B3%E8%BE%B2%E5%BB%A3%E5%A0%B4-%E4%BA%94%E7%A6%8F%E8%87%A8%E9%96%80%E7%A5%9E%E6%9C%A8%EF%BC%89',
            coverSourceName: '逆流',
            farmUrl: 'https://goo.gl/FVYrlL',
            address: 'TEST台中市東勢區慶福李慶福街 42 號',
            phone: '04-25854063',
            zone: '中部',
            description_01: 'TEST園區位休閒農業區內(台每年9月起至隔年1月為主要產期，歡迎闔家光臨來採果唷～',
            lat: 24.1938297,
            lon: 120.853604,
            entryLat: 24.1938297,
            entryLon: 120.853604,
            postType: '採果',
            season1: '9-11 月',
            picture1: 'http://ezgo.coa.gov.tw/Uploads2/FUNTHEME01/APPLY_D/20151019135654.jpg',
            picture1Url: 'http://ezgo.coa.gov.tw/ezgo_Play/Home/Contents/?cntid=1161&typeid=2',
            item1: '甜柿',
          }],
        };

        done();
      } catch (e) {
        done(e);
      }
    });

    it('should get app`s news from server', async (done) => {
      try {
        const appId = 1;
        const result = await request.get('/rest/app/' + appId + '/news/');

        result.status.should.be.equal(200);
        result.result.should.be.eq(true);
        result.type.should.be.eq('news');
        result.rss.should.be.string;
        result.list.should.be.array;
        result.list[0].title.should.be.string;
        done();
      } catch (e) {
        done(e);
      }
    });

    it('should get app`s content from server', async done => {
      try {
        const appId = 1;
        const result = await request.get('/rest/app/' + appId + '/content/');

        result.status.should.be.equal(200);
        result.result.should.be.eq(true);
        result.type.should.be.eq('content');
        result.list.should.be.array;
        result.list[0].title.should.be.string;
        done();
      } catch (e) {
        done(e);
      }
    });

    it('should add a app to backend and send jsons to s3', async (done) => {
      try {
        const app = {
          bundleId: 'com.trunksys.test',
          description: 'description',
          urlLandingPage: 'http://trunk.studio',
          urlAppStore: 'http://trunk.studio',
          urlPlayStore: 'http://trunk.studio',
          news: testNews,
          content: testContent,
        };
        const result = await request
                              .post('/rest/app')
                              .send(app);

        result.status.should.be.equal(200);
        result.result.should.be.eq(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('should update a app`s news to server', async (done) => {
      try {
        const dateId = 1;
        const appId = 1;
        const result = await request
                              .post(`/rest/app/${appId}/content/${dateId}`)
                              .send(testNews);
        result.status.should.be.equal(200);
        result.result.should.be.eq(true);
        done();
      } catch (e) {
        done(e);
      }
    });

    it('should update a app`s content to server', async (done) => {
      try {
        const dateId = 1;
        const appId = 1;
        const result = await request
                              .post(`/rest/app/${appId}/content/${dateId}`)
                              .send(testContent);
        result.status.should.be.equal(200);
        result.result.should.be.eq(true);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
