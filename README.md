# banner-js-webpack-plugin
append content before webpack entry bundle

## Pre

```JavaScript
const { BannerPlugin } = require('webpack')
const uglifyJs = require('uglify-js')
let injected

class BannerJSPlugin {
  constructor (code) {
    return new BannerPlugin({
    entryOnly: true,
    raw: true,
    test: /\.js$/,
    banner: function () {
        if (!injected) {
          injected = true
          code = typeof code !== 'string' ? code.toString() : code
          return uglifyJs.minify(code).code
        }
        return ''
      }
    })
  }
}

module.exports = 
```
