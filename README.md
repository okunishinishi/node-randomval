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

<!-- Section from "docs/readme/01.Installation.md.hbs" Start -->

<a name="section-docs-readme-01-installation-md"></a>
Installation
-----

```bash
npm install randomval --save
```

<!-- Section from "docs/readme/01.Installation.md.hbs" End -->

<!-- Section from "docs/readme/02.Usage.md.hbs" Start -->

<a name="section-docs-readme-02-usage-md"></a>
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
console.log(randomval.randomBool()); //-> true


//------------------------
// Random Date
//------------------------
console.log(randomval.randomDate()); //-> Thu Feb 25 2016 05:52:08 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Fri Nov 27 2015 21:46:50 GMT+0900 (JST)
console.log(randomval.randomDate()); //-> Sat Feb 27 2016 17:43:49 GMT+0900 (JST)


//------------------------
// Random Hash
//------------------------
console.log(randomval.randomHash()); //-> 3336a5d2801c478093af2d9c2c227973
console.log(randomval.randomHash()); //-> b68f27ff6f6847cfb960c487d357fcc2
console.log(randomval.randomHash()); //-> 0edb1564b31e47b0852276d2f0e9e807


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> 6824848459486257
console.log(randomval.randomInt()); //-> 928136176849315
console.log(randomval.randomInt()); //-> -3949863975094664


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.7062572750921652
console.log(randomval.random()); //-> 0.28409568421459963
console.log(randomval.random()); //-> 0.4732667204835339



```


<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.API Guide.md.hbs" Start -->

<a name="section-docs-readme-03-a-p-i-guide-md"></a>
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
<!-- Section from "docs/readme/03.API Guide.md.hbs" End -->


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
