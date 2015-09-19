#!/usr/bin/env/node

var randomval = require('randomval');

//------------------------
// Random Bool
//------------------------
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> true


//------------------------
// Random Date
//------------------------
console.log(randomval.randomDate()); //-> Fri Sep 09 2016 02:59:21 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Fri Mar 18 2016 07:23:34 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Tue Sep 22 2015 11:19:07 GMT+0900 (JST)


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()); //-> d58d700940b84660b775389f284db5c3
console.log(randomval.randomHash()); //-> 2e59e3b5673e479c8094acbc5ed37084
console.log(randomval.randomHash()); //-> 4516d8613a1a47df92fdded114ce57fb


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> 1985141113110129
console.log(randomval.randomInt()); //-> -6662197704185954
console.log(randomval.randomInt()); //-> -6667853620957552


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.4730212771880503
console.log(randomval.random()); //-> 0.7822856179632716
console.log(randomval.random()); //-> 0.5389907490251746


