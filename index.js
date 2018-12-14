const { BannerPlugin } = require('webpack')
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
          return `!!(${code})();`
        }
        return ''
      }
    })
  }
}

module.exports = BannerJSPlugin
