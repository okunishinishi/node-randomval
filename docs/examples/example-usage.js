#!/usr/bin/env/node

var randomval = require('randomval');

//------------------------
// Random Bool
//------------------------
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> true
console.log(randomval.randomBool()); //-> true


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()); //-> c2c78d0b4803450aa401edcb58048177
console.log(randomval.randomHash()); //-> 6378b2d84de64df3942616ea3e980974
console.log(randomval.randomHash()); //-> b90d6edf956048de90bfbf6d28bb0032


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> -7755334475142629
console.log(randomval.randomInt()); //-> -6010704062985394
console.log(randomval.randomInt()); //-> -8268072369693981


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.9024099284441274
console.log(randomval.random()); //-> 0.1043218469873204
console.log(randomval.random()); //-> 0.02503144618163211


