#!/usr/bin/env/node

const randomval = require('randomval')

// ------------------------
// Random Bool
// ------------------------
console.log(randomval.randomBool()) //-> true
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> true


// ------------------------
// Random Date
// ------------------------
console.log(randomval.randomDate()) //-> Sun Nov 06 2016 04:21:48 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Mon Sep 05 2016 16:40:03 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Mon Feb 06 2017 04:26:58 GMT+0900 (JST)


// ------------------------
// Random Hash
// ------------------------
console.log(randomval.randomHash()) //-> f85cc2695b0e4f10b0c2a95b97180932
console.log(randomval.randomHash()) //-> d4b04978607d41b7b4b2f6a002e24d5f
console.log(randomval.randomHash()) //-> 79710470ef84415785a056bcc2f97eec


// ------------------------
// Random Int
// ------------------------
console.log(randomval.randomInt()) //-> 7760009941197143
console.log(randomval.randomInt()) //-> 3134867026950855
console.log(randomval.randomInt()) //-> 7126311575051583


// ------------------------
// Random
// ------------------------
console.log(randomval.random()) //-> 0.921515475164274
console.log(randomval.random()) //-> 0.4500047805348817
console.log(randomval.random()) //-> 0.3578966036493634


