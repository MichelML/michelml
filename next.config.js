const env = require('./utils/env')

module.exports = {
  target: 'serverless',
  env: {
    ...env,
  },
}
