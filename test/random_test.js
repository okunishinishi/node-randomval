/**
 * Test case for random.
 * Runs with nodeunit.
 */

var random = require('../lib/random.js')

exports.setUp = function (done) {
    done()
};

exports.tearDown = function (done) {
    done()
};

exports['Random'] = function (test) {
    for (var i = 0; i < 1000; i++) {
        var val = random()
        test.ok(0 <= val)
        test.ok(val <= 1)
    }
    test.done()
};

