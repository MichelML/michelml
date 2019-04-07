const fs = require("fs");
const moment = require("moment");
const { last } = require("lodash");

const name = last(process.argv);
const cleanName = name.replace(/\s/g, "");

if (fs.existsSync(`blog_posts/${cleanName}.html`)) {
  console.log(
    `\nNew blog post was not created. Blog post with name "${name}" already exists.\n`
  );
  process.exit();
}

fs.writeFileSync(
  `blog_posts/${cleanName}.html`,
  `<p>Start writing - the title, date and author will be added automatically</p>`,
  "utf8"
);

fs.writeFileSync(
  `blog_posts/${cleanName}.js`,
  `
const moment = require("moment");

module.exports = {
  name: "${name}",
  author: "Michel Moreau",
  date: "${moment(Date.now()).startOf('day').format()}",
  post: fs.readFileSync("blog_posts/${cleanName}.html", "utf8"),
};
  `.trim(),
  "utf8"
);
