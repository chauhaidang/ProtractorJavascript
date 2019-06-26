export 
let 
ecCondition = {
    CONTAIN_TEXT: 'textInElement',
    VISIBLE: 'visibility',
    PRESENT: 'present',
    CLICKABLE: 'clickable'
},

navigateTo = async (url = '') => {
    try {
        await browser.get(url);
        await browser.logger.info(`Navigated to ${url}`);
    }
    catch(e){
        await browser.logger.error(`Can not navigate to ${browser.baseUrl} due to >> ${e}`);
        throw new Error(`Can not navigat to ${browser.baseUrl} due to >> ${e}`)
    } 
},

waitSupport = async (element, condition, text = '') => {
    let waitFor;
    let EC = protractor.ExpectedConditions;
    switch(condition){
        case ecCondition.CONTAIN_TEXT:
            waitFor = EC.textToBePresentInElement(element, text);
            break;
        case ecCondition.VISIBLE:
            waitFor = EC.visibilityOf(element);
            break;
        case ecCondition.PRESENT:
            waitFor = EC.presenceOf(element);
            break;
        case ecCondition.CLICKABLE:
            waitFor = EC.elementToBeClickable(element);
    }
    try{
        await browser.wait(waitFor, browser.timeout, `Time out when waiting for condition ${condition}!`);
        await browser.logger.info(`Wait condition passed!`);
    }
    catch(e){
        browser.logger.error(e);
        throw e;
    }
},

cleanCacheAndRefresh = async () => {
    try{
        await browser.executeScript('window.localStorage.clear();');
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.driver.manage().deleteAllCookies();
        await browser.refresh();
        await browser.logger.info(`Refreshed!`);
    }
    catch(e){
        browser.logger.error(`Refresh and clean cache failed due to => ${e}`);
        throw new Error(`Refresh and clean cache failed due to => ${e}`);
    }
},

clickElementClickable = async (element) => {
    try{
        await waitSupport(element, ecCondition.CLICKABLE);
        await element.click();
        await browser.logger.info(`Click element succesfully!`);
    }
    catch(e){
        await browser.logger.error(`Can not click to element due to => ${e}`);
        throw new Error(`Can not click to element due to => ${e}`);
    }
},

sendKeyElementVisible = async (element, text) => {
    try{
        await waitSupport(element, ecCondition.VISIBLE);
        await element.sendKeys(text);
        await browser.logger.info(`Send keys to element succesfully!`);
    }
    catch(e){
        await browser.logger.error(`Can not send key '${text}' to element due to => ${e}`);
        throw new Error(`Can not send key '${text}' to element due to => ${e}`);
    }
},

clickElementPresent = async (element) => {
    try{
        await waitSupport(element, ecCondition.PRESENT);
        await element.click();
        await browser.logger.info(`Click element succesfully!`);
    }
    catch(e){
        await browser.logger.error(`Can not click to element due to => ${e}`);
        throw new Error(`Can not click to element due to => ${e}`);
    }
},

SelectWrapper = class{
    constructor(selector){
        this.webElement = element(selector);
    }

    getOptions(){
        return this.webElement.all(by.tagName('option'));
    }

    getSelectedOptions(){
        return this.webElement.all(by.css('option[selected="selected"]'));
    }

    selectByValue(value){
        return this.webElement.all(by.css(`option[value="${value}"]`)).click();
    }

    selectByPartialText(text){
        return this.webElement.all(by.cssContainingText('option', text)).click();
    }

    selectByText(text){
        return this.webElement.all(by.xpath(`option[.="${text}"]`)).click();
    }
};




