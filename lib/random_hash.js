/**
 * Random hash value.
 * @memberof module:randomval/lib
 * @function randomHash
 * @param {number} [len=32] - Hash length.
 * @returns {string} - Random hash string.
 */

"use strict";

var uuid = require('uuid');

/** @lends randomHash */
function randomHash(len) {
    var val = uuid().replace(/\-/g, '');
    while (val.length < len) {
        val += randomHash();
    }
    return val.substr(0, len);
}

module.exports = randomHash;
