#!/usr/bin/env/node

const randomval = require('randomval')

// ------------------------
// Random Bool
// ------------------------
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> true


// ------------------------
// Random Date
// ------------------------
console.log(randomval.randomDate()) //-> Thu Aug 11 2016 06:05:41 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Mon Apr 24 2017 03:20:31 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Sat Jul 23 2016 10:16:25 GMT+0900 (JST)


// ------------------------
// Random Hash
// ------------------------
console.log(randomval.randomHash()) //-> 0ddced3571c24f228443f760c3763f64
console.log(randomval.randomHash()) //-> cdb765faf6f44a9ab6123221daafc93f
console.log(randomval.randomHash()) //-> 65482304e8014eaaa8132107b08779cf


// ------------------------
// Random Int
// ------------------------
console.log(randomval.randomInt()) //-> -2439996233874324
console.log(randomval.randomInt()) //-> 7249627967245591
console.log(randomval.randomInt()) //-> 255659273392895


// ------------------------
// Random
// ------------------------
console.log(randomval.random()) //-> 0.5048742056154916
console.log(randomval.random()) //-> 0.36379830705698435
console.log(randomval.random()) //-> 0.3258186543992534


