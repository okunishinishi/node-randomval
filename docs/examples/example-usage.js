#!/usr/bin/env/node

var randomval = require('randomval');

//------------------------
// Random Bool
//------------------------
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> false


//------------------------
// Random Date
//------------------------
console.log(randomval.randomDate()); //-> Fri Jun 17 2016 09:17:58 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Tue Aug 09 2016 09:09:12 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Thu Oct 22 2015 20:19:15 GMT+0900 (JST)


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()); //-> 74a4acbc5ab94dbbb365023e19e420f0
console.log(randomval.randomHash()); //-> 51e8f7210d014c5c81b38c6d51153e0c
console.log(randomval.randomHash()); //-> 120a389206cf422e951cf62a94bdf21b


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> -76857541147183
console.log(randomval.randomInt()); //-> 7103413473579555
console.log(randomval.randomInt()); //-> -1861127911025036


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.6014412797796922
console.log(randomval.random()); //-> 0.6303151658788813
console.log(randomval.random()); //-> 0.025495296310486637


