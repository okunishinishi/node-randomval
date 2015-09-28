/**
 * Random val context.
 * @memberof module:randomval/lib
 * @function random
 * @returns {number} Random number between 0 and 1.
 */

"use strict";

/** @lends random */
function random() {
    return Math.random();
}

module.exports = random;
