/**
 * Test case for randomBool.
 * Runs with nodeunit.
 */

var randomBool = require('../lib/random_bool.js')

exports.setUp = function (done) {
    done()
};

exports.tearDown = function (done) {
    done()
};

exports['Random bool'] = function (test) {
    for (var i = 0; i < 1000; i++) {
        var val = randomBool()
        test.equal(typeof val, 'boolean')
    }
    test.done()
};

