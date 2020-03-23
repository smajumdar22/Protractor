'use strict';

describe('Chain Locator', () => {
    it('should add a Name as Test', () => {

        browser.get('http://juliemr.github.io/protractor-demo/')
        //chain locators, and css for identical tags
        element(by.model('first')).sendKeys('4');
        element(by.model('second')).sendKeys('2');
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('2');
            element(by.id('gobutton')).click();

            element(by.model('first')).sendKeys('6');
        element(by.model('second')).sendKeys('2');
            element(by.id('gobutton')).click();

            // element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then((text)=>{
            //     console.log(text)
            // });

        element.all(by.repeater('result in memory')).count().then(result => {
            console.log(result);
        })

    });
});