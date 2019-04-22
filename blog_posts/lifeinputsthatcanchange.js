const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "Life inputs that can change",
  cleanName: "lifeinputsthatcanchange",
  author: "Michel Moreau",
  date: "2019-04-22T00:00:00-04:00",
  post: fs.readFileSync("blog_posts/lifeinputsthatcanchange.html", "utf8"),
  img: "/static/postimages/lifeinputsthatcanchange.jpg",
  svg: "/static/postimages/lifeinputsthatcanchange.svg"
};
