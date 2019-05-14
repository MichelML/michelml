const fs = require("fs");

module.exports = {
  name: "Fear of parenting",
  cleanName: "fearofparenting",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/fearofparenting.html", "utf8"),
  img: "/static/postimages/fearofparenting.svg",
  svg: "/static/postimages/fearofparenting.svg"
};