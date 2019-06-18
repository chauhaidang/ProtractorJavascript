
describe('Validating the calculator app', () => {

    let title;

    beforeEach(() => {
        //Before it()
        browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        title = browser.getTitle();
    });

    it('Validate exact title', () => {
        title.then((titleText)=>{
            console.log(titleText);
            expect(titleText).toEqual('Protractor practice website - Calculator');
        });
    });

    it('Validate exact title', () => {
        title.then((titleText)=>{
            console.log(titleText);
            expect(titleText).not.toEqual('Protractor practice website - Calculator');
        });
    });

    it('Validate exact title', () => {
        title.then((titleText)=>{
            console.log(titleText);
            expect(titleText).toMatch('Protractor practice website - Calculator');
        });
    });
});