exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNoteOpts:{
        defaultTimeoutInterval: 30000,
    },
    specs: ['spec/wrapper_usage.js'],
    suites: {
      smoke: ['./smoke/*.js'],
      functional: ['./functional/*.js'],
      regression: ['./regression/*.js'],
      all: ['./*/*.js']
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
  };