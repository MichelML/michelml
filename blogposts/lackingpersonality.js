const fs = require("fs");

module.exports = {
  name: "Lacking personality",
  cleanName: "lackingpersonality",
  author: "Michel Moreau",
  date: "2019-05-14T00:00:00-04:00",
  post: fs.readFileSync("blogposts/lackingpersonality.html", "utf8"),
  img: "/static/postimages/lackingpersonality.jpg",
  svg: "/static/postimages/lackingpersonality.svg"
};
