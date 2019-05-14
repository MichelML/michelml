const fs = require("fs");

module.exports = {
  name: "On Relationships",
  cleanName: "onrelationships",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/onrelationships.html", "utf8"),
  img: "/static/postimages/onrelationships.jpg",
  svg: "/static/postimages/onrelationships.svg"
};
