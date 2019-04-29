const env = require('./utils/env')

module.exports = {
  target: 'serverless',
  dev: env.isDev,
  env: {
    ...env,
  },
};
