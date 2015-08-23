#!/usr/bin/env/node

var randomval = require('randomval');

//------------------------
// Random Bool
//------------------------
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> true
console.log(randomval.randomBool()); //-> false


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> 8943620460748465
console.log(randomval.randomInt()); //-> -5287325145379261
console.log(randomval.randomInt()); //-> 396508468071823


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.7673027618185732
console.log(randomval.random()); //-> 0.5381899546718075
console.log(randomval.random()); //-> 0.7657448213010718


