const fs = require("fs");

module.exports = {
  name: "What makes a person good",
  cleanName: "whatmakesapersongood",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/whatmakesapersongood.html", "utf8"),
  img: "/static/postimages/whatmakesapersongood.jpg",
  svg: "/static/postimages/whatmakesapersongood.svg"
};
