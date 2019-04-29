const fs = require("fs");

module.exports = {
  name: "On Being Rigid",
  cleanName: "onbeingrigid",
  author: "Michel Moreau",
  date: "2019-04-23T00:00:00-04:00",
  post: fs.readFileSync("blogposts/onbeingrigid.html", "utf8"),
  img: "/static/postimages/onbeingrigid.jpg",
  svg: "/static/postimages/onbeingrigid.svg"
};
