exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNoteOpts:{
        defaultTimeoutInterval: 30000,
    },
    
    specs: ['spec/test_matcher.js'],

    suites: {
      smoke: ['./smoke/*.js'],
      functional: ['./functional/*.js'],
      regression: ['./regression/*.js'],
      all: ['./*/*.js']
    },

    directConnect: true,
    
    capabilities: {
      browserName: 'chrome',

      chromeOptions: {
        //args: ['--headless']
      },
    },
  };