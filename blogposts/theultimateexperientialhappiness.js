const fs = require("fs");

module.exports = {
  name: "The ultimate experiential happiness",
  cleanName: "theultimateexperientialhappiness",
  author: "Michel Moreau",
  date: "2019-04-27T00:00:00-04:00",
  post: fs.readFileSync("blogposts/theultimateexperientialhappiness.html", "utf8"),
  img: "/static/postimages/theultimateexperientialhappiness.jpg",
  svg: "/static/postimages/theultimateexperientialhappiness.svg"
};