
describe('Test automation of a banking app', () => {
    it('validate customer login test', () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        element(by.buttonText('Customer Login')).click();

        expect(browser.getTitle()).toContain('Protractor practice website - Banking App');

        element.all(by.css("#userSelect option")).then((items) => {
            console.log(`Total value in dropdown are ${items.length}`);
            for (let i = 0; i < items.length; i++) {
                items[i].getText().then((text) => { console.log(text); });
            }
        });

        
        element(by.model("custId")).element(by.css("[value='2']")).click();

        element(by.buttonText('Login')).click();

        element(by.binding("user")).getText().then((text) => {
            console.log(text);
        });

        expect(element(by.binding('user')).getText()).toEqual('Harry Potter');
        
    });
});