var pluginSass = require('eleventy-plugin-sass')

module.exports = function(config) {
  config.addPlugin(pluginSass, { autoprefixer: true })
}
