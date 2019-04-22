const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "fundamentals of what exists",
  cleanName: "fundamentalsofwhatexists",
  author: "Michel Moreau",
  date: "2019-04-22T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/fundamentalsofwhatexists.html", "utf8"),
  img: "/static/postimages/fundamentalsofwhatexists.jpg",
  svg: "/static/postimages/fundamentalsofwhatexists.svg"
};