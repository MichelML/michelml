const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/books': { page: '/books' },
      '/about': { page: '/about' },
      '/email': { page: '/email' },
    }
  }
}
