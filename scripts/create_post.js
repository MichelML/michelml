const fs = require("fs");
const moment = require("moment");
const trianglify = require("trianglify");
const { last } = require("lodash");

const name = last(process.argv);
const cleanName = name.replace(/\s/g, "").toLowerCase();

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
const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "${name}",
  cleanName: "${cleanName}",
  author: "Michel Moreau",
  date: "${moment(Date.now())
    .startOf("day")
    .format()}",
  post: fs.readFileSync("blog_posts/${cleanName}.html", "utf8"),
  img: "/static/postimages/${cleanName}.svg"
};
  `.trim(),
  "utf8"
);

const variance = (Math.floor(Math.random() * 49) + 50) / 100;
const seed = Math.round(Math.random() * 1000);
const svg = trianglify({ variance, seed, x_colors: "random" }).svg();
svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
fs.writeFileSync(`static/postimages/${cleanName}.svg`, svg.outerHTML, "utf8");
