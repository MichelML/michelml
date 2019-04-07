const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Hello World",
  cleanName: "helloworld",
  author: "Michel Moreau",
  date: "2019-04-07T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/helloworld.html", "utf8"),
  img: "/static/postimages/helloworld.svg"
};