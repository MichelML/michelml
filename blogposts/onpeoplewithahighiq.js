const fs = require("fs");

module.exports = {
  name: "On people with a high IQ",
  cleanName: "onpeoplewithahighiq",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/onpeoplewithahighiq.html", "utf8"),
  img: "/static/postimages/onpeoplewithahighiq.jpg",
  svg: "/static/postimages/onpeoplewithahighiq.svg"
};
