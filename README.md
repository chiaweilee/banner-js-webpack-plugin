# banner-js-webpack-plugin
append content before webpack entry bundle

*inject your JS code before entry of webpack*

*base on webpack banner-plugin*

<a href="https://npmcharts.com/compare/banner-js-webpack-plugin?minimal=true"><img src="https://img.shields.io/npm/dm/banner-js-webpack-plugin.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/banner-js-webpack-plugin"><img src="https://img.shields.io/npm/v/banner-js-webpack-plugin.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/banner-js-webpack-plugin"><img src="https://img.shields.io/npm/l/banner-js-webpack-plugin.svg" alt="License"></a>

## Install

```bash
npm install banner-js-webpack-plugin
```

## Usage

```JavaScript
// webpack.config.js
const BannerJSPlugin = require('banner-js-webpack-plugin')
```

```JavaScript
// webpack.config.js
plugins: [
    new BannerJSPlugin(function () {
        // your code
      })
]
```

⚠️ the code you added will auto-run like this:

```JavaScript
(function () {
    // your code
})()
```

also,

```JavaScript
// webpack.config.js
plugins: [
    new BannerJSPlugin('function () {}')
]
```

## Example

```JavaScript
// webpack.config plugins
new BannerJSPlugin(function () {
    var random = Math.random()
    random += 1
    return random
  })
```

```JavaScript
// dist/chunk-vendors.js
(function(){var t=Math.random();t+=1})(),(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"], // ...
```
