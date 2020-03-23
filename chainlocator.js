'use strict';

describe('Chain Locator', () => {
    it('should add a Name as Test', () => {

        browser.get('http://juliemr.github.io/protractor-demo/')
        //chain locators, and css for identical tags
        element(by.model('first')).sendKeys('4');
        //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('8');
        //element(by.model('operator')).select.element(by.css("option[value='DIVISION']"))
        element(by.cssContainingText('option', 'DIVISION')).click();
        element(by.model('second')).sendKeys('2');
            element(by.id('gobutton')).click();

            element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then((text)=>{
                console.log(text)
            });

    });
});