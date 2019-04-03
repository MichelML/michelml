const env = require('./utils/env')

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/books': { page: '/books' },
      '/about': { page: '/about' },
      '/email': { page: '/email' },
    }
  },
  target: 'serverless',
  env: {
    ...env,
  },
}
