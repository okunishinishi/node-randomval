/**
 * 
 * @module randomval
 */

"use strict";

module.exports = {
    get randomBool() { return require('./random_bool'); },
    get randomDate() { return require('./random_date'); },
    get randomHash() { return require('./random_hash'); },
    get randomInt() { return require('./random_int'); },
    get random() { return require('./random'); }
};