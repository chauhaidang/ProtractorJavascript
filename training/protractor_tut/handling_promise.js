describe('Name of the group', () => {
    it('should behave...', () => {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");

        browser.sleep(5000);

        element(by.css('.btn.btn-primary.btn-lg')).click();

        browser.sleep(2000);

        console.log('after clicking');

        //browser.getTitle(); //This return a promise (it may not complete yet) and it need to be resolved by us or async/await if we want a result immediately

        //console.log(browser.getTitle()); //-> return a object promise
        
        browser.getTitle().then((title) => {
            console.log(title);
            if(title === 'Protractor practice website - Banking App'){
                console.log("Title matched!");
            }
            else{
                console.log("Title did not match!");
            }
        });



        browser.sleep(2000);
    });
});