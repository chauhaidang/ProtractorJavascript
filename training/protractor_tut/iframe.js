describe('testing a frame', () => {
    it('verify on frame', () => {
        browser.waitForAngularEnabled(false);
        browser.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
        browser.switchTo().frame("iframeResult").then(() => {
            element(by.buttonText('Try it')).click(); //if we not switch to iframe, we can not click or find element. And after we switch to the frame we also can not interact with the root window's element
        });

        browser.switchTo().defaultContent();//switch back to default window
        browser.sleep(3000);

    });
});