const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
  PHASE_PRODUCTION_BUILD
} = require("next/constants");

module.exports = phase => {
  let env;

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    env = {
      isProd: false,
      isStaging: false,
      isDev: true,
      rootUrl: "http://localhost:3000"
    };
  } else if (
    phase === PHASE_PRODUCTION_BUILD ||
    phase === PHASE_PRODUCTION_SERVER
  ) {
    env = {
      isProd: true,
      isStaging: false,
      isDev: false,
      rootUrl: "https://www.michelml.com"
    };
  } else {
    env = {
      isProd: false,
      isStaging: true,
      isDev: false,
      rootUrl: `https://michelml-git-${
        process.env.NOW_GITHUB_COMMIT_REF
      }.michelml.now.sh`
    };
  }
  return {
    target: "serverless",
    env
  };
};
