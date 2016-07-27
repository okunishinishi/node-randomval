#!/usr/bin/env/node

const randomval = require('randomval')

// ------------------------
// Random Bool
// ------------------------
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> false
console.log(randomval.randomBool()) //-> false


// ------------------------
// Random Date
// ------------------------
console.log(randomval.randomDate()) //-> Mon Feb 27 2017 06:47:46 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Thu May 04 2017 13:30:50 GMT+0900 (JST)
console.log(randomval.randomDate()) //-> Wed Oct 12 2016 11:11:15 GMT+0900 (JST)


// ------------------------
// Random Hash
// ------------------------
console.log(randomval.randomHash()) //-> 51ad65b4ffba43ae9d42dc21012f241b
console.log(randomval.randomHash()) //-> c58578cd6da44d5e9c0a2878a860140b
console.log(randomval.randomHash()) //-> 89edff168da94dad881f77e5579f6818


// ------------------------
// Random Int
// ------------------------
console.log(randomval.randomInt()) //-> 622392957845795
console.log(randomval.randomInt()) //-> 669960724599439
console.log(randomval.randomInt()) //-> 5444904577018895


// ------------------------
// Random
// ------------------------
console.log(randomval.random()) //-> 0.9886534754827632
console.log(randomval.random()) //-> 0.9206835888086802
console.log(randomval.random()) //-> 0.38572521192620557


