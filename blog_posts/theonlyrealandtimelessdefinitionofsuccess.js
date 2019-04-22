const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "the only real and timeless definition of success",
  cleanName: "theonlyrealandtimelessdefinitionofsuccess",
  author: "Michel Moreau",
  date: "2019-04-21T00:00:00-04:00",
  post: fs.readFileSync(
    "blog_posts/theonlyrealandtimelessdefinitionofsuccess.html",
    "utf8"
  ),
  img: "/static/postimages/theonlyrealandtimelessdefinitionofsuccess.jpg",
  svg: "/static/postimages/theonlyrealandtimelessdefinitionofsuccess.svg"
};
