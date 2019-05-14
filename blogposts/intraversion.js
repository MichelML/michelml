const fs = require("fs");

module.exports = {
  name: "Intraversion",
  cleanName: "intraversion",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/intraversion.html", "utf8"),
  img: "/static/postimages/intraversion.jpg",
  svg: "/static/postimages/intraversion.svg"
};