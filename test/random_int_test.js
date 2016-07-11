/**
 * Test case for randomInt.
 * Runs with nodeunit.
 */

var randomInt = require('../lib/random_int.js')

exports.setUp = function (done) {
    done()
};

exports.tearDown = function (done) {
    done()
};

exports['Random int'] = function (test) {
    for (var i = 0; i < 100; i++) {
        var val = randomInt()
        test.equal(parseInt(val), val)
    }
    test.done()
};

exports['Random int in range'] = function (test) {
    var min = 0, max = 100;
    for (var i = 0; i < 100; i++) {
        var val = randomInt(min, max)
        test.equal(parseInt(val), val)
        test.ok(min <= val)
        test.ok(val <= max)
    }
    test.done()
};




