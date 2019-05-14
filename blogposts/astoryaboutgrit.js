const fs = require("fs");

module.exports = {
  name: "A story about grit",
  cleanName: "astoryaboutgrit",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/astoryaboutgrit.html", "utf8"),
  img: "/static/postimages/astoryaboutgrit.jpg",
  svg: "/static/postimages/astoryaboutgrit.svg"
};
