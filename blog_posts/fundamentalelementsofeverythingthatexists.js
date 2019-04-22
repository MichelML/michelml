const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "fundamental elements of everything that exists",
  cleanName: "fundamentalelementsofeverythingthatexists",
  author: "Michel Moreau",
  date: "2019-04-22T00:00:00-04:00",
  post: fs.readFileSync(
    "blog_posts/fundamentalelementsofeverythingthatexists.html",
    "utf8"
  ),
  img: "/static/postimages/fundamentalelementsofeverythingthatexists.jpg",
  svg: "/static/postimages/fundamentalelementsofeverythingthatexists.svg"
};
