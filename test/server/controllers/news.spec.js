describe("News", () => {

    describe("API Test", done => {

        let testData1;
        let testData2;

        before(async done => {
            try {

              testData1 = {

              }

              done();
            } catch (e) {
              done(e);
            }
        })

        it('should get app`s news from server', async done => {
            try {
                let target = 'agritour';
                let result = await request.get("/rest/news/" + target);

                // data json
                // {
                //     result: true,         -> api query result
                //     errMsg: '',           -> if error return a errMsg
                //     target: "agritour",   -> which app'data should be query
                //     rss: "http://xxx.xxxx.xxx",
                //     list: [{
                //         title: "",
                //         time: null,
                //         url: "",
                //         description: ""
                //     }],
                // }

                result.result.should.be.eq(true);
                result.target.should.be.eq('agritour');
                result.rss.should.be.string;
                result.list.should.be.array;
                result.list[0].title.should.be.string;
                done();
            } catch (e) {
                done(e);
            }
        });

    });
});
