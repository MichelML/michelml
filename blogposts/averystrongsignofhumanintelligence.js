const fs = require("fs");

module.exports = {
  name: "A Sign of Human Intelligence",
  cleanName: "averystrongsignofhumanintelligence",
  author: "Michel Moreau",
  date: "2019-04-24T00:00:00-04:00",
  post: fs.readFileSync(
    "blogposts/averystrongsignofhumanintelligence.html",
    "utf8"
  ),
  img: "/static/postimages/averystrongsignofhumanintelligence.jpg",
  svg: "/static/postimages/averystrongsignofhumanintelligence.svg"
};
