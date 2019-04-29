const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "A Timeless definition of success",
  cleanName: "theonlyrealandtimelessdefinitionofsuccess",
  author: "Michel Moreau",
  date: "2019-04-21T00:00:00-04:00",
  post: fs.readFileSync(
    "blogposts/theonlyrealandtimelessdefinitionofsuccess.html",
    "utf8"
  ),
  img: "/static/postimages/theonlyrealandtimelessdefinitionofsuccess.jpg",
  svg: "/static/postimages/theonlyrealandtimelessdefinitionofsuccess.svg"
};
