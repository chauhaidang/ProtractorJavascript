import {SelectWrapper} from '../../util/WebdriverSupport';
let mySelect = new SelectWrapper(by.id("userSelect"));

describe('Automating Customer Login functionality', () => {
    it('Login to the account', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.cssContainingText('.btn.btn-primary.btn-lg', 'Customer Login')).click();
        mySelect.selectByText('Harry Potter');
    });
});