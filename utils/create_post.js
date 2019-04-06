const {execSync} = require('child_process')
const argv = require('yargs').argv

const cleanName = argv.name.replace(/\s/g, '')

execSync(`touch blog_posts/${cleanName}.js`)
execSync(`touch blog_posts/${cleanName}.html`)

