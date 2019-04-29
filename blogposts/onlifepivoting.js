const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "On life pivoting",
  cleanName: "onlifepivoting",
  author: "Michel Moreau",
  date: "2019-04-17T00:00:00-04:00",
  post: fs.readFileSync("blogposts/onlifepivoting.html", "utf8"),
  img: "/static/postimages/onlifepivoting.jpg",
  svg: "/static/postimages/onlifepivoting.svg"
};
