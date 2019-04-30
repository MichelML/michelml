const {PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER} = require('next/constants');

const isProd = process.env.NOW_GITHUB_COMMIT_REF === "master" || PHASE_PRODUCTION_BUILD || PHASE_PRODUCTION_SERVER;
const isStaging =
  !!process.env.NOW_GITHUB_COMMIT_REF &&
  process.env.NOW_GITHUB_COMMIT_REF !== "master";
const isDev = !isProd && !isStaging;

let rootUrl;
if (isProd) {
  rootUrl = "https://www.michelml.com";
} else if (isStaging) {
  rootUrl = `https://michelml-git-${
    process.env.NOW_GITHUB_COMMIT_REF
  }.michelml.now.sh`;
} else {
  rootUrl = `http://localhost:3000`;
}

module.exports = {
  isProd,
  isStaging,
  isDev,
  rootUrl
};
