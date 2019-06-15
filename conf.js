exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    directConnect: true,
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        //args: ['--headless']
      }
    }
  };