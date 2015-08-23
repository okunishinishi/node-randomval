/**
 * 
 * @module randomval
 */

"use strict";

module.exports = {
    get randomBool() { return require('./random_bool'); },
    get randomInt() { return require('./random_int'); },
    get random() { return require('./random'); }
};