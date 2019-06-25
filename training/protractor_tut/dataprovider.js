import using from 'jasmine-data-provider';
import * as Objects from './readDataAndJson.json';

describe('test data provider', () => {

    //Data provider directly on test case
    using([{text: 'ABC'}, {text: 'DEFE'}], (data)=>{
        it('test data provider basic..', () => {
            browser.get('https://docs.angularjs.org/tutorial');
    
            element(by.xpath('//input')).sendKeys(data.text);
            browser.sleep(5000);
        });
    });

    //Data provider from function
    let plusProvider = () => {
        return Objects.arrText;
    };

    using(plusProvider, (data)=>{
        it('test data provider as function..', () => {
            browser.get('https://docs.angularjs.org/tutorial');
    
            element(by.xpath('//input')).sendKeys(data.text);
            browser.sleep(5000);
        });
    });

    //Data with dynamic it block description
    let objectDataProvider = {
        'parameterize description': {text: 'cute'},
        'parameterize description2': {text: 'cute2'}
    };

    using(objectDataProvider, (data, description)=>{
        it(description, () => {
            browser.get('https://docs.angularjs.org/tutorial');
    
            element(by.xpath('//input')).sendKeys(data.text);
            browser.sleep(5000);
        });
    });
});