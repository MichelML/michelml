const fs = require("fs");
const moment = require("moment");
const { last } = require("lodash");
const createPostImage = require("./create_post_img");

const deepaiKey = "f5448788-d4ba-439f-a9d3-ad517438797f";
const deepai = require("deepai");
deepai.setApiKey(deepaiKey);

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
  img: "/static/postimages/${cleanName}.jpg",
  svg: "/static/postimages/${cleanName}.svg"
};
  `.trim(),
  "utf8"
);

createPostImage(cleanName);
