const fs = require("fs");

module.exports = {
  name: "A natural love for thinking",
  cleanName: "anaturalloveforthinking",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/anaturalloveforthinking.html", "utf8"),
  img: "/static/postimages/anaturalloveforthinking.jpg",
  svg: "/static/postimages/anaturalloveforthinking.svg"
};
