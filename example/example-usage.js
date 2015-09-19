#!/usr/bin/env/node

var randomval = require('randomval');

//------------------------
// Random Bool
//------------------------
console.log(randomval.randomBool()); //-> true
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> true


//------------------------
// Random Date
//------------------------
console.log(randomval.randomDate()); //-> Sat Sep 17 2016 09:46:10 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Fri May 06 2016 09:12:10 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Thu Aug 11 2016 16:02:34 GMT+0900 (JST)


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()); //-> 77d05f4b9ff34cf58f9f5f694e38dd30
console.log(randomval.randomHash()); //-> 9a5bbaf1ec8543428c4931ad5dd3f340
console.log(randomval.randomHash()); //-> d5a8d6d25482424f94dbc4116241799e


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> -6061111429421148
console.log(randomval.randomInt()); //-> 6972719292385139
console.log(randomval.randomInt()); //-> -2219637566846040


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.2124272570951764
console.log(randomval.random()); //-> 0.9803370838138555
console.log(randomval.random()); //-> 0.3645741994405479


