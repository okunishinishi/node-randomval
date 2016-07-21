#!/usr/bin/env/node

const randomval = require('randomval')

// ------------------------
// Random Bool
// ------------------------
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> false


// ------------------------
// Random Date
// ------------------------
console.log(randomval.randomDate()) //-> Sun Oct 02 2016 07:23:53 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Tue Feb 14 2017 23:29:11 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Thu Apr 06 2017 08:51:05 GMT+0900 (JST)


// ------------------------
// Random Hash
// ------------------------
console.log(randomval.randomHash()) //-> 8494cfd185b2487c9b1774f8ead40250
console.log(randomval.randomHash()) //-> 1c6513d66b484ae893cfbd98cb6c4f6b
console.log(randomval.randomHash()) //-> 69db78b81ea648b58923a2274be3cf45


// ------------------------
// Random Int
// ------------------------
console.log(randomval.randomInt()) //-> 1940780894032027
console.log(randomval.randomInt()) //-> 4278983983204771
console.log(randomval.randomInt()) //-> 1941120047634543


// ------------------------
// Random
// ------------------------
console.log(randomval.random()) //-> 0.4246480446359502
console.log(randomval.random()) //-> 0.44697657275506186
console.log(randomval.random()) //-> 0.020484721233673175


