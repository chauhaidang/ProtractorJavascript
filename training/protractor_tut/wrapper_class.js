
//class for action selecting an option with selector (must define the type of object e.g function)
let SelectWrapper = function (selector) {
    this.webElement = element(selector);
}

//Wrapper Prototype will wrap selector in constructor by returned selector below
SelectWrapper.prototype.getOptions = function () {
    return this.webElement.all(by.tagName('option'));
};

SelectWrapper.prototype.getSelectedOptions = function () {
    return this.webElement.all(by.css('option[selected="selected"]'));
};

SelectWrapper.prototype.selectByValue = function (value) {
    return this.webElement.all(by.css(`option[value="${value}"]`)).click();
};

SelectWrapper.prototype.selectByPartialText = function (text) {
    return this.webElement.all(by.cssContainingText('option', text)).click();
};

SelectWrapper.prototype.selectByText = function (text) {
    return this.webElement.all(by.xpath(`option[.="${text}"]`)).click();
};

module.exports = SelectWrapper;

