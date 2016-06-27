describe('News', () => {
  describe('API Test', done => {
    const testData1;
    const testData2;

    before(async done => {
      try {
        testData1 = {
        };
        done();
      } catch (e) {
        done(e);
      }
    });

    it('should get app`s news from server', async done => {
      try {
        const appId = 1;
        const result = await request.get('/rest/app/' + appId + '/news/');

        // data json
        // {
        //   "result": true,
        //   "ukey": "21n3b123b123h12jb31",
        //   "time": 212132334345345,
        //   "type": "news",
        //   "rss": "http://recreation.forest.gov.tw/rss_news.aspx?id=News",
        //   "list": [{
        //       "title": "00000墾丁國家公園環境教育校外教學活動",
        //       "time": null,
        //       "url": "http://ezgo.coa.gov.tw/ezgo_Rec/Home/_NEWS_M/244",
        //       "description": "墾丁國家公園管理處成立於 1984 年 1 月，是我國第一座成立的國家公園，三面臨海，為我國少數同時涵蓋陸域與海域的國家公園之一。墾丁國家公園位於台灣最南端，園區內兼備有海灣、湖泊、丘陵、草原與熱帶闊葉樹林等變化多端之地理形勢，所孕育的動植物資源非常豐富，可說是台灣最富有海陸景觀特色之地區。本活動結合播放國家公園環境教育生態影片與環境教育課程活動成為一組完整之國家公園環境教育活動，使學習者了解國家公園知性及感性之美並達到環境與生態教育之目的，進一步促使學習者珍愛台灣環境生態。"
        //   }],
        // }

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

        // data json
        // {
        //   "result": true,
        //   "ukey": "21n3b123b123h12jb31",
        //   "time": 212132334345345,
        //   "type": "content",
        //   "list": [{
        //       "id": 1,
        //       "place": "台中市東勢區",
        //       "title": "000阿布拉觀光果園",
        //       "cover": "http://9.share.photo.xuite.net/evelyn_9699/19ac61d/10406107/479450178_m.jpg",
        //       "coverSourceUrl": "http://blog.xuite.net/evelyn_9699/twblog/127158869-980507-%E5%8F%B0%E4%B8%AD%E4%B8%80%E6%97%A5%E9%81%8A%EF%BC%88%E8%BB%9F%E5%9F%A4%E5%9D%91%E4%BC%91%E9%96%92%E8%BE%B2%E6%A5%AD%E5%8D%80-%E7%9F%B3%E8%BE%B2%E5%BB%A3%E5%A0%B4-%E4%BA%94%E7%A6%8F%E8%87%A8%E9%96%80%E7%A5%9E%E6%9C%A8%EF%BC%89",
        //       "coverSourceName": "逆流",
        //       "farmUrl": "https://goo.gl/FVYrlL",
        //       "address": "台中市東勢區慶福李慶福街 42 號",
        //       "phone": "04-25854063",
        //       "zone": "中部",
        //       "description_01": "園區位於台中市東勢區軟埤坑休閒農業區內(台8線8公里處)，可經由天梯步道行經阿布拉觀光果園，果園海拔約550公尺，占地約1公頃，園內種植甜柿及筆柿等高經濟水果，每年9月起至隔年1月為主要產期，歡迎闔家光臨來採果唷～",
        //       "lat": 24.1938297,
        //       "lon": 120.853604,
        //       "entryLat": 24.1938297,
        //       "entryLon": 120.853604,
        //       "postType": "採果",
        //       "season1": "9-11 月",
        //       "picture1": "http://ezgo.coa.gov.tw/Uploads2/FUNTHEME01/APPLY_D/20151019135654.jpg",
        //       "picture1Url": "http://ezgo.coa.gov.tw/ezgo_Play/Home/Contents/?cntid=1161&typeid=2",
        //       "item1": "甜柿"
        //   }],
        // }

        result.result.should.be.eq(true);
        result.type.should.be.eq('content');
        result.list.should.be.array;
        result.list[0].title.should.be.string;
        done();
      } catch (e) {
        done(e);
      }
    });

  });
});
