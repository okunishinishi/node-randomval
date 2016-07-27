#!/usr/bin/env/node

const randomval = require('randomval')

// ------------------------
// Random Bool
// ------------------------
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> false


// ------------------------
// Random Date
// ------------------------
console.log(randomval.randomDate()) //-> Fri Apr 07 2017 12:29:47 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Fri Jul 29 2016 23:20:37 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Thu Jun 15 2017 11:42:47 GMT+0900 (JST)


// ------------------------
// Random Hash
// ------------------------
console.log(randomval.randomHash()) //-> fbc74dc4e5604d3bb4a247336f546a0c
console.log(randomval.randomHash()) //-> c9826adc42fb4f1485eefede301b4249
console.log(randomval.randomHash()) //-> 47fe0fcde7374994a32eb3044971133a


// ------------------------
// Random Int
// ------------------------
console.log(randomval.randomInt()) //-> 8415443539184623
console.log(randomval.randomInt()) //-> 3765920046669879
console.log(randomval.randomInt()) //-> -7432877051974375


// ------------------------
// Random
// ------------------------
console.log(randomval.random()) //-> 0.3165589085203926
console.log(randomval.random()) //-> 0.8483740346794695
console.log(randomval.random()) //-> 0.251029907029402


