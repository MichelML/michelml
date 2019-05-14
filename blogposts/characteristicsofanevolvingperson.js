const fs = require("fs");

module.exports = {
  name: "Characteristics of an evolving person",
  cleanName: "characteristicsofanevolvingperson",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync(
    "blogposts/characteristicsofanevolvingperson.html",
    "utf8"
  ),
  img: "/static/postimages/characteristicsofanevolvingperson.svg",
  svg: "/static/postimages/characteristicsofanevolvingperson.svg"
};
