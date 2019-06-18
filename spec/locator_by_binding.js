describe('Locator by ng binding', () => {
    it('test locator by ng binding', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.id('gobutton')).click();
        //View page source to get what element did bind to
        element(by.binding('latest')).getText().then((text)=>{
            console.log(text);
        });
        browser.sleep(2000);

    });
});