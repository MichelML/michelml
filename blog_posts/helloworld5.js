const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Hello World 5",
  cleanName: "helloworld5",
  author: "Michel Moreau",
  date: "2019-04-08T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/helloworld5.html", "utf8"),
  img: "/static/postimages/helloworld5.jpg",
  svg: "/static/postimages/helloworld5.svg"
};
