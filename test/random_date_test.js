/**
 * Test case for randomDate.
 * Runs with nodeunit.
 */

var randomDate = require('../lib/random_date.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Random date'] = function (test) {
    for (var i = 0; i < 100; i++) {
        var date = randomDate();
        test.ok(date);
        test.ok(date instanceof Date);
    }
    test.done();
};

exports['Random date in range'] = function (test) {
    var from = new Date(),
        to = new Date(from.getTime() + 200);
    for (var i = 0; i < 100; i++) {
        var date = randomDate(from, to);
        test.ok(date);
        test.ok(from.getTime() <= date.getTime());
        test.ok(date.getTime() <= to.getTime());
    }
    test.done();
};

