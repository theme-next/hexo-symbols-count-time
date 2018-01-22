<!--[cover-image]: https://coveralls.io/repos/github/theme-next/hexo-symbols-count-time/badge.svg?branch=master-->
[cover-image]: https://img.shields.io/coveralls/theme-next/hexo-symbols-count-time/master.svg
[travis-image]: https://travis-ci.org/theme-next/hexo-symbols-count-time.svg?branch=master
<!--[travis-image]: https://img.shields.io/travis/theme-next/hexo-symbols-count-time/master.svg-->
[appveyor-image]: https://ci.appveyor.com/api/projects/status/wuewa37rb7nknx31/branch/master?svg=true

[hexo-image]: https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg
[node-image]: https://img.shields.io/node/v/hexo-symbols-count-time.svg
[dep-image]: https://david-dm.org/theme-next/hexo-symbols-count-time.svg
<!--[dep-image]: https://img.shields.io/david/theme-next/hexo-symbols-count-time.svg-->
<!--[dep-image]: https://img.shields.io/librariesio/github/theme-next/hexo-symbols-count-time.svg-->
[doc-image]: https://readthedocs.org/projects/hexo-symbols-count-time/badge/?version=latest
[rel-image]: https://img.shields.io/github/release/theme-next/hexo-symbols-count-time.svg
[size-image]: https://img.shields.io/github/size/theme-next/hexo-symbols-count-time/lib/helper.js.svg

[mnt-image]: https://img.shields.io/maintenance/yes/2018.svg
[npm-image]: https://badge.fury.io/js/hexo-symbols-count-time.svg
<!--[npm-image]: https://badge.fury.io/gh/theme-next%2Fhexo-symbols-count-time.svg-->
<!--[npm-image]: https://img.shields.io/npm/v/hexo-symbols-count-time.svg-->
[dm-image]: https://img.shields.io/npm/dm/hexo-symbols-count-time.svg
[dt-image]: https://img.shields.io/npm/dt/hexo-symbols-count-time.svg
[lic-image]: https://img.shields.io/npm/l/hexo-symbols-count-time.svg

[cover-url]: https://coveralls.io/github/theme-next/hexo-symbols-count-time?branch=master "Coverage of Tests"
[travis-url]: https://travis-ci.org/theme-next/hexo-symbols-count-time?branch=master "Travis CI [Linux]"
[appveyor-url]: https://ci.appveyor.com/project/ivan-nginx/hexo-symbols-count-time/branch/master "AppVeyor [Windows]"
[hexo-url]: https://hexo.io
[node-url]: https://nodejs.org/en/download/releases
[doc-url]: http://hexo-symbols-count-time.readthedocs.io/en/latest/?badge=latest
[npm-url]: https://www.npmjs.com/package/hexo-symbols-count-time

# hexo-symbols-count-time
[![cover-image]][cover-url]
[![travis-image]][travis-url]
[![appveyor-image]][appveyor-url]
[![hexo-image]][hexo-url]
[![node-image]][node-url]
[![npm-image]][npm-url]
[![mnt-image]](../../commits/master)
[![lic-image]](LICENSE)

Symbols count and time to read of articles.

Better then `hexo-reading-time` and faster then `hexo-worcount`. No dependencies.

## Installation
[![size-image]](../../blob/master/lib/helper.js) <!--[![rel-image]](../../releases)-->
[![dm-image]][npm-url]
[![dt-image]][npm-url]

```bash
npm install hexo-symbols-count-time --save
```

## Usage
Activate this plugin in hexo's `_config.yml` (which locates in the root dir of your blog) by enabled any option:
```yml
symbols_count_time:
  symbols: true
  time: true
  total_symbols: true
  total_time: true
```
If `symbols_count_time` not specified (or commented), plugin will totally disabled.

### NexT theme
This plugin integrated in «NexT» and after plugin enabled in main Hexo config, need to enable options in NexT config:

```yml
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: false
  awl: 5
  wpm: 200
```

### Other themes

#### Swig

##### Symbols Count
```js
{{ symbolsCount(post.content) }}
```

##### Symbols Time
```js
{{ symbolsTime(post.content) }}
```
OR
```js
{{ symbolsTime(post.content, AWL, WPM) }}
```

##### Symbols Count Total
```js
{{ symbolsCountTotal(site) }}
```

##### Symbols Time Total
```js
{{ symbolsTimeTotal(site) }}
```
OR
```js
{{ symbolsTimeTotal(site, AWL, WPM) }}
```

#### EJS

##### Symbols Count
```ejs
<%- symbolsCount(post.content) %>
```

##### Symbols Time
```ejs
<%- symbolsTime(post.content) %>
```
OR
```ejs
<%- symbolsTime(post.content, AWL, WPM) %>
```

##### Symbols Count Total
```ejs
<%- symbolsCountTotal(site) %>
```

##### Symbols Time Total
```ejs
<%- symbolsTimeTotal(site) %>
```
OR
```ejs
<%- symbolsTimeTotal(site, AWL, WPM) %>
```

#### Jade

##### Symbols Count
```jade
span= symbolsCount(post.content)
```

##### Symbols Time
```jade
span= symbolsTime(post.content)
```
OR
```jade
span= symbolsTime(post.content, AWL, WPM)
```

##### Symbols Count Total
```jade
span= symbolsCountTotal(site)
```

##### Symbols Time Total
```jade
span= symbolsTimeTotal(site)
```
OR
```jade
span= symbolsTimeTotal(site, AWL, WPM)
```

#### Parameters
* `AWL` — Average Word Length (chars count in word). Default: `5`. You can check this [here](https://charactercounttool.com).
  * EN &asymp; `5`
  * RU &asymp; `6`
  * CN &asymp; `25`
* `WPM` — Words Per Minute. Default: `200`. You can check this [here](https://wordcounter.net).
  * Slow &asymp; `200`
  * Normal &asymp; `275`
  * Fast &asymp; `350`

## Development

```bash
cd hexo
git clone https://github.com/theme-next/hexo-symbols-count-time.git node_modules/hexo-symbols-count-time
cd node_modules/hexo-symbols-count-time
```

### Tests ###

```bash
npm install mocha chai --save-dev
npm test
```

### Tests with coverage ###

```bash
npm install -g istanbul
istanbul cover --print both node_modules/.bin/_mocha -- test/index.js
```
