describe('Name of the group', () => {
    it('should behave...', async () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.tizag.com/htmlT/htmlcheckboxes.php');
        browser.sleep(5000);
        for(let i = 1; i<=4 ;i++){
            //element(by.xpath(`//div[4]/input["${i}"]`)).click();
            // element(by.xpath(`//div[4]/input[${i}]`)).getAttribute('value').then((text)=> {
            //     console.log(`${text} getting the value from checkbox number: ${i}`);
            // }) //normal promise

            //now use async await

            let text = await element(by.xpath(`//div[4]/input[${i}]`)).getAttribute('value')
            console.log(`${text}`);
        }
    });
});