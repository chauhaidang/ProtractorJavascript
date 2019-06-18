
describe('Validating the calculator app', () => {
    beforeEach(() => {
        //Before it()
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    });

    afterEach(() => {
        //After it()
        browser.sleep(2000);
    });

    it('Validate 1 + 1 = 2', () => {
        
        element(by.model('first')).sendKeys('1');
        element(by.model('second')).sendKeys('2');
        element(by.buttonText('Go!')).click();
        element(by.binding('latest')).getText().then((text)=>{
            console.log(`Result is ${text}`);
            expect(text).toBe(2);
        });
    });

    it('Validate 2 + 2 = 4', () => {
       
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('2');
        element(by.buttonText('Go!')).click();
        element(by.binding('latest')).getText().then((text)=>{
            console.log(`Result is ${text}`);
            expect(text).toBe(5);
        });
    });

    it('Validate 3 + 3 = 6', () => {
        
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('3');
        element(by.buttonText('Go!')).click();
        element(by.binding('latest')).getText().then((text)=>{
            console.log(`Result is ${text}`);
            expect(text).toBe(6);
        });
    });
});