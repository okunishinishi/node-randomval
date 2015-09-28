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
[bd_bower_badge_url]: https://img.shields.io/bower/v/randomval.svg?style=flat

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
console.log(randomval.randomBool()); //-> true
console.log(randomval.randomBool()); //-> false


//------------------------
// Random Date
//------------------------
console.log(randomval.randomDate()); //-> Fri Feb 26 2016 00:17:03 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Fri Jul 08 2016 09:37:34 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Mon May 30 2016 02:38:52 GMT+0900 (JST)


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()); //-> 74400018a7fd43dfa4bff75f4b6da566
console.log(randomval.randomHash()); //-> a6cf5ec18dfe43bd9dc39d94afc3f7a9
console.log(randomval.randomHash()); //-> 1b56145ce6e84ccb97a999cbb9d2f9b0


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> 3061263319957503
console.log(randomval.randomInt()); //-> 3050111965855743
console.log(randomval.randomInt()); //-> 292883122880511


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.6340260966680944
console.log(randomval.random()); //-> 0.5538445585407317
console.log(randomval.random()); //-> 0.36733108782209456



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
