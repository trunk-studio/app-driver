describe.only('about report model operation.', () => {
  it('create report should success.', async (done) => {
    try {
      const user = await models.User.create({
        username: 'AAA',
        email: 'dan82625@gmail.com',
      });
      const report = await models.Report.create({
        user_id: user.id,
      });

      await models.Software.create({
        china360: '1.0',
        chrome: '1.0',
        firefox: '1.0',
        flash: '1.0',
        ie: '1.0',
        safari: '1.0',
        report_id: report.id,
      });

      await models.Hardware.create({
        cpu: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
        cpuBenchmark: '48255.59',
        model: 'MacBookAir7,2',
        modelVersion: 'OS X El Capitan 10.11.3',
        ram: [
          {
            size: '4 GB',
            speed: '1600 MHz',
            status: 'OK',
            type: 'DDR3',
          }, {
            size: '4 GB',
            speed: '1600 MHz',
            status: 'OK',
            type: 'DDR3',
          },
        ],
        nic: [
          {
            device: 'en0',
            ethernetAddress: 'e0:ac:cb:9b:75:d2',
            hardware: 'Wi-Fi',
            enable: true,
          }, {
            device: 'en1',
            ethernetAddress: '9a:00:03:f4:55:80',
            hardware: 'Thunderbolt 1',
            enable: false,
          }, {
            device: 'en2',
            ethernetAddress: 'e0:ac:cb:9b:75:d3',
            hardware: 'Bluetooth PAN',
            enable: false,
          }, {
            device: 'bridge0',
            ethernetAddress: 'e2:ac:cb:b9:85:00',
            hardware: 'Thunderbolt Bridge',
            enable: false,
          },
        ],
        report_id: report.id,
      });

      await models.Network.create({
        ip: '192.168.168.114',
        ping: '47',
        upload: '1861818.18',
        download: '81269.84',
        traceRoute: [
          '192.168.168.114 : 211.72.239.254 (ttl=1 ms=6)',
          '192.168.168.114 : 168.95.229.166 (ttl=2 ms=4)',
          '192.168.168.114 : 220.128.16.234 (ttl=3 ms=7)',
          '192.168.168.114 : 220.128.16.29 (ttl=4 ms=8)',
          '192.168.168.114 : 220.128.18.193 (ttl=5 ms=6)',
          '192.168.168.114 : 72.14.205.150 (ttl=6 ms=10)',
          '192.168.168.114 : 216.239.62.178 (ttl=7 ms=50)',
          '192.168.168.114 : 209.85.242.163 (ttl=8 ms=12)',
          '192.168.168.114 : 216.239.41.152 (ttl=9 ms=45)',
          '192.168.168.114 : 209.85.243.238 (ttl=10 ms=46)',
          '192.168.168.114 : 209.85.253.163 (ttl=11 ms=46)',
          '192.168.168.114 : 108.170.233.83 (ttl=12 ms=49)',
          '192.168.168.114 : 172.217.25.99 (ttl=13 ms=46)',
        ],
        report_id: report.id,
      });

      await models.Network.create({
        ip: '127.0.0.1',
        ping: '10',
        upload: '1861818.18',
        download: '81269.84',
        traceRoute: [
          '127.0.0.1 : 211.72.239.254 (ttl=1 ms=6)',
          '127.0.0.1 : 168.95.229.166 (ttl=2 ms=4)',
        ],
        report_id: report.id,
      });

      const testFindReport = await models.Report.findOne({
        where: {
          id: report.id,
        },
        include: [
          models.Software,
          models.Hardware,
          models.Network,
        ],
      });
      console.log(JSON.stringify(testFindReport, null, 2));
      done();
    } catch (e) {
      console.log(e);
      done(e)
    }
  });
});
