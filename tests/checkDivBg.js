/// <reference path="../typings/jasmine/jasmine.d.ts"/>
describe('getDivBg', function() {
    var d = document.querySelector('.box');

    it('Should be teal', function() {
        expect(d.style.backgroundColor).toBe('teal');
    });
});