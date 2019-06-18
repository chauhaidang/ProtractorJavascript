let {logger,transports} = require('./util/LogSupport');
let dateformat = require('dateformat');
let fs2 = require('fs-extra');

const _ReportDir = 'report/';
let reportNameSpace;

exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNoteOpts:{
        defaultTimeoutInterval: 30000,
    },

    specs: ['./training/protractor_tut/sample_log.js'],
    suites: {
      smoke: ['./suite/smoke/*.js'],
      functional: ['./suite/functional/*.js'],
      regression: ['./suite/regression/*.js'],
      all: ['./*/*/*.js']
    },

    directConnect: true,
    
    capabilities: {
      // browserName: 'firefox',
      // 'moz:firefoxOptions': {
      //   args: ['--headless', '--safe-mode']
      // }
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless']
      },
    },

    getPageTimeout: 10000,

    restartBrowserBetweenTests: true,

    SELENIUM_PROMISE_MANAGER: true,

    beforeLaunch: () => {
      //clean up report dir
      fs2.emptyDir(_ReportDir).then(()=>{
        console.log('success clean up report folder before run tests!');
      }).catch(err => {
        console.error(err);
      });
    },

    onPrepare: () => {
      browser.manage().window().maximize();
      browser.driver.manage().timeouts().implicitlyWait(5000);//This apply for non-angular page and wait for statement to be timeout implicitly

      let date = new Date();
      reportNameSpace = dateformat(date, 'dddd_mmmm_dS_yyyy_HH_MM_ss');

      logger.add(
        new transports.File({
          filename: `${__dirname}/${_ReportDir}${reportNameSpace}/${reportNameSpace}_ExecutionLog.log`,
        })
      );
      
      browser.logger = logger;
      browser.timeouts = 5000;

    }
  };