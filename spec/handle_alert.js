describe('Name of the group', () => {
    it('asdad', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://mail.rediff.com/cgi-bin/login.cgi');
        element(by.xpath('//*[@type="submit"]')).click();

        let alert = browser.switchTo().alert();
        alert.getText().then((text)=>{console.log(text)});
        browser.sleep(3000);
        alert.accept();
        browser.sleep(3000);

        element(by.xpath('//*[@id="login1"]')).sendKeys('asasdad');//Must handle alert before this statement
        
    });
});