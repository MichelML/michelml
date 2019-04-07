const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Hello World 4",
  cleanName: "helloworld4",
  author: "Michel Moreau",
  date: "2019-04-07T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/helloworld4.html", "utf8"),
};