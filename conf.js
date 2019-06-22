let { logger, transports } = require('./util/LogSupport');
let dateformat = require('dateformat');
let fs2 = require('fs-extra');
let HTMLReport = require('protractor-html-reporter-2');
let jasmineReporters = require('jasmine-reporters');
let JasmineConsoleReporter = require('jasmine-console-reporter');
let HTMLReport2 = require('protractor-beautiful-reporter');
let path = require('path');

const _ReportDir = 'report/';
let reportNameSpace;

exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  jasmineNoteOpts: {
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
    shardTestFiles: true,
  },

  getPageTimeout: 10000,

  //Between it block
  restartBrowserBetweenTests: false,

  SELENIUM_PROMISE_MANAGER: true,

  beforeLaunch: () => {
    //clean up report dir
    fs2.emptyDir(_ReportDir).then(() => {
      console.log('success clean up report folder before run tests!');
    }).catch(err => {
      console.error(err);
    });
  },

  afterLaunch: () => {

  },

  onPrepare: () => {
    browser.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(60000);//This apply for non-angular page and wait for statement to be timeout implicitly
  
    let date = new Date();
    reportNameSpace = dateformat(date, 'dddd_mmmm_dS_yyyy_HH_MM_ss');

    logger.add(
      new transports.File({
        filename: `${__dirname}/${_ReportDir}${reportNameSpace}_ExecutionLog.log`,
      })
    );
    
    //Custom jasmine log report
    jasmine.getEnv().addReporter(new JasmineConsoleReporter({
      colors: true,
      cleanStack: true,
      verbosity: true,
      listStyle: 'flat', // "flat"|"indent"
      activity: false,
    }));

    //For protractor html 2 reporter

    // fs2.emptyDir(`${_ReportDir}screenshots`, function (err) {
    //   console.log(err);
    // });

    // jasmine.getEnv().addReporter({
    //   specDone: function (result) {
    //     if (result.status === 'failed' || result.status === 'passed') {
    //       browser.getCapabilities().then(function (caps) {
    //         var browserName = caps.get('browserName');

    //         browser.takeScreenshot().then(function (png) {
    //           var stream = fs2.createWriteStream(`${_ReportDir}screenshots/` + browserName + '-' + result.fullName + '.png');
    //           stream.write(png);
    //           stream.end();
    //         });
    //       });
    //     }
    //   }
    // });

    // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //   consolidateAll: true,
    //   savePath: `${_ReportDir}`,
    //   filePrefix: `${reportNameSpace}_xmloutput`
    // }));

    //Protractor beatiful reporter
    jasmine.getEnv().addReporter(new HTMLReport2({
      baseDirectory: `${_ReportDir}`,
      docTitle: 'PROTRACTOR REPORT',
      screenshotsSubfolder: 'images',
      takeScreenShotsOnlyForFailedSpecs: true,
      clientDefaults: {
        columnSettings: {
          warningTime: 5000,
          dangerTime: 10000
        }
      }
    }).getJasmine2Reporter());

    browser.logger = logger;
    browser.timeouts = 5000;
  },

  onComplete: () => {
    //For protractor html reporter 2
    // let browserName, browserVersion;
    // let capsPromise = browser.getCapabilities();

    // capsPromise.then(function (caps) {
    //   browserName = caps.get('browserName');
    //   browserVersion = caps.get('version');
    //   let platform = caps.get('platform');
    //   let testConfig = {
    //     reportTitle: 'Protractor Test Execution Report',
    //     outputPath: `${_ReportDir}`,
    //     outputFilename: `${reportNameSpace}_ProtractorTestReport`,
    //     screenshotPath: `${_ReportDir}screenshots/`,
    //     testBrowser: browserName,
    //     browserVersion: browserVersion,
    //     modifiedSuiteName: true,
    //     screenshotsOnlyOnFailure: false,
    //     testPlatform: platform,
    //     consolidateAll: true,
    //   };
    //   new HTMLReport().from(`${_ReportDir}${reportNameSpace}_xmloutput.xml`, testConfig);
    // });
  }
};