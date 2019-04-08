const env = require('./utils/env')

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/library': { page: '/library' },
      '/about': { page: '/about' },
      '/email': { page: '/email' },
    }
  },
  target: 'serverless',
  env: {
    ...env,
  },
}
