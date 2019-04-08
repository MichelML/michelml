const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Hello World 6",
  cleanName: "helloworld6",
  author: "Michel Moreau",
  date: "2019-04-08T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/helloworld6.html", "utf8"),
  img: "/static/postimages/helloworld6.jpg",
  svg: "/static/postimages/helloworld6.svg"
};