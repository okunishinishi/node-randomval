/**
 * Random boolean value.
 * @memberof module:randomval/lib
 * @function randomBool
 * @returns {boolean} - Random boolean.
 */

"use strict";

var random = require('./random');

/** @lends randomBool */
function randomBool() {
    return random() > random();
}

module.exports = randomBool;

