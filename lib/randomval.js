/**
 * Random val context.
 * @memberof module:randomval/lib
 * @inner
 * @constructor Randomval
 */

"use strict";

var Random = require("random-js");

/** @lends Randomval */
function Randomval() {

}

Randomval.prototype = Object.create(Random.prototype);
Randomval.prototype.constructor = Randomval;

module.exports = Randomval;