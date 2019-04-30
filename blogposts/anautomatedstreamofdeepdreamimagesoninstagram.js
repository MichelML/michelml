const fs = require("fs");

module.exports = {
  name: "an automated stream of deep dreams",
  cleanName: "anautomatedstreamofdeepdreamimagesoninstagram",
  author: "Michel Moreau",
  date: "2019-04-30T00:00:00-04:00",
  post: fs.readFileSync("blogposts/anautomatedstreamofdeepdreamimagesoninstagram.html", "utf8"),
  img: "/static/postimages/anautomatedstreamofdeepdreamimagesoninstagram.jpg",
  svg: "/static/postimages/anautomatedstreamofdeepdreamimagesoninstagram.svg"
};