exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    jasmineNoteOpts:{
        defaultTimeoutInterval: 30000,
    },
    
    specs: ['spec/howPromiseWork.js'],

    directConnect: true,
    
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        args: ['--headless']
      },
    },
  };