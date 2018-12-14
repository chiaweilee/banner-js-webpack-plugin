# banner-js-webpack-plugin
append content before webpack entry bundle

*inject your JS code before entry of webpack*

*base on webpack banner-plugin*

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
