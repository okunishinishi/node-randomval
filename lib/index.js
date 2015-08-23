/**
 * Generate random values.
 * @module randomval
 * @version 1.0.0
 */

"use strict";

var Randomval = require('./randomval');

function create(config){
    return new Randomval(config);
}

var randomVal = create({});
randomVal.create = create;
randomVal.Randomval = Randomval;

module.exports = randomVal;
