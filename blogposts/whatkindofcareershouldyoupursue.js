const fs = require("fs");

module.exports = {
  name: "The Career You Should Pursue",
  cleanName: "whatkindofcareershouldyoupursue",
  author: "Michel Moreau",
  date: "2019-04-25T00:00:00-04:00",
  post: fs.readFileSync(
    "blogposts/whatkindofcareershouldyoupursue.html",
    "utf8"
  ),
  img: "/static/postimages/whatkindofcareershouldyoupursue.jpg",
  svg: "/static/postimages/whatkindofcareershouldyoupursue.svg"
};
