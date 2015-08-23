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
console.log(randomval.randomBool()); //-> true
console.log(randomval.randomBool()); //-> false
console.log(randomval.randomBool()); //-> false


//------------------------
// Random Int
//------------------------
console.log(randomval.randomInt()); //-> -1699149190700306
console.log(randomval.randomInt()); //-> 5223944159682253
console.log(randomval.randomInt()); //-> -5749076673248740


//------------------------
// Random
//------------------------
console.log(randomval.random()); //-> 0.12896469495287843
console.log(randomval.random()); //-> 0.888327038196566
console.log(randomval.random()); //-> 0.6544586782330327



```


<!-- Section from "docs/readme/02.Usage.md.hbs" End -->

<!-- Section from "docs/readme/03.API Guide.md.hbs" Start -->

<a name="section-docs-readme-03-a-p-i-guide-md"></a>
API Guide
---------

| Signature | Description |
| ---- | ----- |
| `.random()` | Random number between 0 and 1 |
| `.randomBool()` | Random boolean. (`true` or `false`) |
| `.randomInt()` | Random integer value |
| `.randomInt(min, max)` | Random integer value in range |

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

+ [PhantomJS](http://phantomjs.org/)

<!-- Links End -->
