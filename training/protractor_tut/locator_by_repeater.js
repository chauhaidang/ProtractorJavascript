describe('Locator by ng repeater', () => {
    it('add some calculation', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('5');
        element(by.id('gobutton')).click();

        // element(by.repeater('result in memory').row(0).column('result.value')).getText().then((txt)=>{
        //     console.log(txt);
        // }); 

        //Get all date table
        // element.all(by.repeater('result in memory')).getText().then((txt) => {
        //     console.log(txt);
        // }); 

        //Get all data table but in row by row
        element.all(by.repeater('result in memory')).getText().then((rows) => {
            let noOfItems = rows.length;
            for(var i = 0; i<noOfItems; i++){
                element(by.repeater('result in memory').row(i)).getText().then((txt)=>{
                    console.log(txt);
                });
            }
        }); 

        browser.sleep(4000);
    });
});