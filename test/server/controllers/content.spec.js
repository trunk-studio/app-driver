describe("Content", () => {

    describe("API Test", done => {

        let testData1;
        let testData2;

        before(async done => {
            try {
              testData1 = {
                title: "蘇花古道大南澳越嶺段",
                contentType: "郊山",
                relatedUrl: "http://recreation.forest.gov.tw/RT/RT_2_1.aspx?TR_ID=001",
                description: "蘇花古道建造於清朝同治13 年（1874 年），是聯絡蘇澳與花蓮之間最早的一條官道；日人19 世紀於蘇花海岸",
                details: [
                  "國家級步道",
                  "全程約 4.1 公里",
                  "海拔約 100-650 公尺",
                  "土徑步道、土木階梯",
                ],
                status: "全線封閉",
                season: '',
                EstimatedTime: 2,
                level: 2,
                length: 4.1,
                recommendation: "遠眺海岸景觀",
                cover: "http://5.share.photo.xuite.net/leekl00/1570c9a/10650800/494300906_m.jpg",
                coverSourceUrl: "http://goo.gl/vU8GFt",
                coverSourceName: "昆哥部落格",
                extraPhotos: [
                  "http://recreation.forest.gov.tw/RT/Photo/001/01/001EP_Map.jpg",
                ],
                extraPhotoSources: [],
                extraPhotoSourceUrls: [],
                placeFullAddress: "",
                placeDist: "",
                placeZone: "東部",
                phone: "",
                website: "",
                lat: 24.436756,
                lon: 121.688164,
                entryLat: 24.436756,
                entryLon: 121.688164,
              };

              testData2 = {
                title: "阿布拉觀光果園",
                contentType: "採果",
                relatedUrl: "https://goo.gl/FVYrlL",
                description: "園區位於台中市東勢區軟埤坑休閒農業區內(台8線8公里處)，可經由天梯步道行經阿布拉觀光果園，果園海拔約550公尺，占地約1公頃，園內種植甜柿及筆柿等高經濟水果，每年9月起至隔年1月為主要產期，歡迎闔家光臨來採果唷～",
                details: [
                  "甜柿",
                  "香蕉",
                  "葡萄",
                ],
                status: "",
                season: '9-11月',
                EstimatedTime: 0,
                level: 0,
                length: 0,
                recommendation: "",
                cover: "http://9.share.photo.xuite.net/evelyn_9699/19ac61d/10406107/479450178_m.jpg",
                coverSourceUrl: "http://blog.xuite.net/evelyn_9699/twblog/127158869-980507-%E5%8F%B0%E4%B8%AD%E4%B8%80%E6%97%A5%E9%81%8A%EF%BC%88%E8%BB%9F%E5%9F%A4%E5%9D%91%E4%BC%91%E9%96%92%E8%BE%B2%E6%A5%AD%E5%8D%80-%E7%9F%B3%E8%BE%B2%E5%BB%A3%E5%A0%B4-%E4%BA%94%E7%A6%8F%E8%87%A8%E9%96%80%E7%A5%9E%E6%9C%A8%EF%BC%89",
                coverSourceName: "逆流",
                extraPhotos: [
                  "http://ezgo.coa.gov.tw/Uploads2/FUNTHEME01/APPLY_D/20151019135654.jpg",
                ],
                extraPhotoSources: [
                  "http://ezgo.coa.gov.tw",
                ],
                extraPhotoSourceUrls: [
                  "http://ezgo.coa.gov.tw/ezgo_Play/Home/Contents/?cntid=1161&typeid=2",
                ],
                placeFullAddress: "台中市東勢區慶福李慶福街 42 號",
                placeDist: "台中市東勢區",
                placeZone: "中部",
                phone: "",
                website: "",
                lat: 24.1938297,
                lon: 120.853604,
                entryLat: 24.1938297,
                entryLon: 120.853604,
              };

                done();
            } catch (e) {
                done(e);
            }
        })

        // list
        it('should get all app content from server', async done => {
            try {
                const appId = 1;
                const result = await request.get(`/rest/app/${appId}/content/`);

                result.result.should.be.eq(true);
                result.products[0].id.should.be.number;
                result.products.should.be.array;
                done();
            } catch (e) {
                done(e);
            }
        });

        // add
        it('should add a app product to server', async done => {
            try {
                const appId = 1;
                const result = await request
                                    .post(`/rest/app/${appId}/content/`)
                                    .send({
                                      testData1
                                    });

                result.result.should.be.eq(true);
                done();
            } catch (e) {
                done(e);
            }
        });

        // update
        it('should add a app product to server', async done => {
            try {
                const id = 1;
                const appId = 1;
                const result = await request
                                    .put(`/rest/app/${appId}/content/${id}`)
                                    .send({
                                      bundleId,
                                      testData1
                                    });

                result.result.should.be.eq(true);
                done();
            } catch (e) {
                done(e);
            }
        });

        // delete
        it('should delete a app product on server', async done => {
            try {
                const id = 1;
                const appId = 1;
                const result = await request
                                    .del(`/rest/app/${appId}/content/${id}`);

                result.result.should.be.eq(true);
                done();
            } catch (e) {
                done(e);
            }
        });

    });
});
