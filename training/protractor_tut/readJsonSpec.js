import * as Objects from './readDataAndJson.json';

describe('test read json', () => {
    it('test read json..', () => {
        browser.get(Objects.testsiteurl);
        console.log(`Test site url is ${Objects.testsiteurl}`);

        element(by.xpath(Objects.locator.btnLearn)).click();
        browser.sleep(3000);
        element(by.xpath(Objects.locator.btnDevelop)).click();
        browser.sleep(3000);
        element(by.xpath(Objects.locator.btnDiscuss)).click();
        browser.sleep(3000);
    });
});