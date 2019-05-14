const fs = require("fs");

module.exports = {
  name: "Questions to an all-knowing being",
  cleanName: "questionstoanallknowingbeing",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/questionstoanallknowingbeing.html", "utf8"),
  img: "/static/postimages/questionstoanallknowingbeing.jpg",
  svg: "/static/postimages/questionstoanallknowingbeing.svg"
};