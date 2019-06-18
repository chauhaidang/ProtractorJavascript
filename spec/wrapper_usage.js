let SelectWrapper = require('./wrapper_class');
let mySelect = new SelectWrapper(by.id('userSelect'));

describe('Select wrapper usage', () => {
    it('Select wrapper usage', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        mySelect.selectByText('Harry Potter');
    });
});