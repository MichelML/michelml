const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Hello World 3",
  cleanName: "helloworld3",
  author: "Michel Moreau",
  date: "2019-04-08T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/helloworld3.html", "utf8"),
  img: "/static/postimages/helloworld3.jpg",
  svg: "/static/postimages/helloworld3.svg"
};
