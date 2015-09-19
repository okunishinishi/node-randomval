randomval
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-randomval
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-randomval
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-randomval.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-randomval/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-randomval
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-randomval.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-randomval.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-randomval
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-randomval.svg
[bd_npm_url]: http://www.npmjs.org/package/randomval
[bd_npm_shield_url]: http://img.shields.io/npm/v/randomval.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Generate random values.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>
Installation
-----

```bash
npm install randomval --save
```

<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>
Usage
----

```javascript
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



```


<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.API Guide.md.hbs" Start -->

<a name="section-doc-readme-03-a-p-i-guide-md"></a>
API Guide
---------

| Signature | Description |
| ---- | ----- |
| **.random()** | Random number between 0 and 1 |
| **.randomBool()** | Random boolean. (`true` or `false`) |
| **.randomInt()** | Random integer value |
| **.randomInt(min, max)** | Random integer value in range |
| **.randomHash()** | Random hash string |
| **.randomHash(len)** | Random hash string with length |
| **.randomDate()** | Random date |
| **.randomDate(min, max)** | Random date in range |
|
<!-- Section from "doc/readme/03.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-randomval/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [random-js](https://www.npmjs.com/package/random-js)

<!-- Links End -->
