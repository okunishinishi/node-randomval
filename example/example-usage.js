#!/usr/bin/env/node

var randomval = require('randomval')

//------------------------
// Random Bool
//------------------------
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> false


//------------------------
// Random Date
//------------------------
console.log(randomval.randomDate()) //-> Sat Oct 31 2015 23:53:46 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Fri Mar 25 2016 01:28:28 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Wed Aug 24 2016 08:21:36 GMT+0900 (JST)


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()) //-> 0154478efcef47febac5c4bad06b842f
console.log(randomval.randomHash()) //-> 406e701e084644768c0b9374c9cab59f
console.log(randomval.randomHash()) //-> 74e408b6fe3e4ef59af990e4ff3384cc


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()) //-> 7169439824871423
console.log(randomval.randomInt()) //-> -8349882758725631
console.log(randomval.randomInt()) //-> 7534013241622527


//------------------------
// Random
//------------------------
console.log(randomval.random()) //-> 0.5143260841723531
console.log(randomval.random()) //-> 0.29279421153478324
console.log(randomval.random()) //-> 0.21549427206628025


