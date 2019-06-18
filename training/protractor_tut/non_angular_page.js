
describe('test login', () => {
    it("validate", () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.gmail.com');
        element(by.xpath('//*[@type="email"]')).sendKeys('chauhaidang1testing@gmail.com');
        element(by.xpath('//*[text()="Tiếp theo"]')).click(); //-->This may be performed after password sendkey below then fail the test <-- must handle synchronization -> we can set browser.driver.manage().timeouts().implicitlyWait(60000); on config for this case or using wait expected condition
        browser.sleep(4000);
        element(by.xpath('//input[@type="password"]')).sendKeys("asdjahdjad");
    });
});