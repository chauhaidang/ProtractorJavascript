describe('Locator by add custom locator', () => {
    it('test locator add custom locator', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        element(by.model('Auth.user.name')).sendKeys('angular');
        element(by.model('Auth.user.password')).sendKeys('password');
        element(by.model('model[options.key]')).sendKeys('Dang Chau');
        
        //We can put this custom in another js file
        by.addLocator('ngClick', (toState, parentElement)=>{
            let using = parentElement || document;
            let prefixs = ['ng-click'];
            for(let i = 0; i<prefixs.length; i++){
                let selector = `*[${prefixs[i]}='${toState}']`; //*[ng-click='yourValue']
                let inputs = using.querySelectorAll(selector);
                if(inputs.length) {
                    return inputs;
                }
            }

        });

        element(by.ngClick('Auth.login()')).click();
        browser.sleep(2000);

        element(by.className('ng-scope')).getText().then((text)=>{
            console.log(text);
            expect(text).toContain('Home');
        });
    });
});