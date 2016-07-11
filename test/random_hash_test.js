/**
 * Test case for randomHash.
 * Runs with nodeunit.
 */

var randomHash = require('../lib/random_hash.js')

exports.setUp = function (done) {
    done()
};

exports.tearDown = function (done) {
    done()
};

exports['Random hash'] = function (test) {
    for (var i = 0; i < 100; i++) {
        var val = randomHash()
        test.ok(val)
        test.equal(val.length, 32)
    }
    test.done()
};


exports['Random hash with length'] = function (test) {
    for (var i = 0; i < 100; i++) {
        var val = randomHash(128)
        test.ok(val)
        test.equal(val.length, 128)
    }
    test.done()
};

