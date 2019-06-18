exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNoteOpts:{
        defaultTimeoutInterval: 30000,
    },
    
    specs: ['spec/wrapper_usage.js'],

    directConnect: true,
    
    capabilities: {
      browserName: 'firefox',
      // chromeOptions: {
      //   args: ['--headless']
      // },
      'moz:firefoxOptions': {
        args: ['--headless', '--safe-mode']
      }
    },
  };