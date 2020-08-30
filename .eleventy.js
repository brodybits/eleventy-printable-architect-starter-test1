var pluginSass = require('eleventy-plugin-sass')

module.exports = function(config) {
  config.setTemplateFormats(['md', 'liquid', 'jpg', 'png'])
  config.addPlugin(pluginSass, { autoprefixer: true })
}
