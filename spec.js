'use strict';

describe('Enter name feature', function() {
    it('should add a Name as Test', function() {

        //non angular website protractor will wait for angular elements to load 
        //and it will not find it on non angular websites
        //browser.waitForAngularEnabled(false);
        //browser.get('https://google.com')


        // browser.get('https://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/')
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('5');
            element(by.id('gobutton')).click();

            //tagname[attribute = 'value']
            //capturing value of sum


            //Jasmine takes care of promise resolve
            expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('8');

            element(by.css("h2[class='ng-binding']")).getText().then((text)=>{
             console.log(text)
            })

            //real output will display only when you resolve promise automatically
            //there could be two potential problems..1.sequesnce is not guaranteed
            //


    });
});