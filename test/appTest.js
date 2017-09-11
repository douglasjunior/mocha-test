const assert = require('chai').assert;
const app = require('../app');

describe('App', function () {

    describe('sayHello()', function () {
        it('shold return hello', function () {
            assert.equal(app.sayHello(), 'hello');
        });

        it('shold return type string', function () {
            assert.typeOf(app.sayHello(), 'string');
        });
    });

    describe('addNumbers()', function () {
        it('shold be above 5', function () {
            assert.isAbove(app.addNumbers(5, 5), 5);
        });

        it('shold return type number', function () {
            assert.typeOf(app.addNumbers(5, 5), 'number');
        });
    });

});
