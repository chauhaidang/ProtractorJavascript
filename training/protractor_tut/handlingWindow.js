describe('Handling window', () => {
    it('Handling multiple window on HDFC Bank', () => {
        browser.waitForAngularEnabled(false);
        browser.get('');
        element(by.xpath('')).click();
        let windowHandles  = browser.getAllWindowHandles();
        let firstWindow, secondWindow, thirdWindow;

        windowHandles.then((handles)=>{
            firstWindow=handles[0];
            secondWindow=handles[1];
            browser.switchTo().window(secondWindow).then(()=>{
                element(by.xpath('')).click();
                browser.close();
            })
            browser.switchTo().window(firstWindow);
        });

    });
});