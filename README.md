randomval
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-randomval
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-randomval
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-randomval.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/okunishinishi/node-randomval
[bd_travis_com_shield_url]: https://api.travis-ci.com/okunishinishi/node-randomval.svg?token=
[bd_license_url]: https://github.com/okunishinishi/node-randomval/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-randomval
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-randomval.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-randomval.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-randomval
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-randomval.svg
[bd_npm_url]: http://www.npmjs.org/package/randomval
[bd_npm_shield_url]: http://img.shields.io/npm/v/randomval.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Generate random values.

<!-- Description End -->




<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
npm install randomval --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
----

```javascript
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



```



<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.API Guide.md.hbs" Start -->

<a name="section-doc-guides-03-a-p-i-guide-md"></a>
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

<!-- Section from "doc/guides/03.API Guide.md.hbs" End -->


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

+ [random-js][random_js_url]

[random_js_url]: https://www.npmjs.com/package/random-js

<!-- Links End -->
