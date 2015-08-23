/**
 * Random val context.
 * @memberof module:randomval/lib
 * @function random
 * @returns {number} Random number between 0 and 1.
 */

"use strict";

var r = require("random-js")();

/** @lends random */
function random() {
    var SIZE = 10000;
    return r.real(0, SIZE) / SIZE;
}

module.exports = random;
