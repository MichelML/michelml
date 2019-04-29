const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "How to master any skill",
  cleanName: "howtomasteranyskill",
  author: "Michel Moreau",
  date: "2019-04-21T00:00:00-04:00",
  post: fs.readFileSync("blogposts/howtomasteranyskill.html", "utf8"),
  img: "/static/postimages/howtomasteranyskill.jpg",
  svg: "/static/postimages/howtomasteranyskill.svg"
};
