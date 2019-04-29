const fs = require("fs");
const moment = require("moment");

module.exports = {
  name: "ten guidelines for maintainable code from Joost Visser et alia",
  cleanName: "tenguidelinesformaintainablecodefromjoostvisseretalia",
  author: "Michel Moreau",
  date: "2019-04-21T00:00:00-04:00",
  post: fs.readFileSync(
    "blogposts/tenguidelinesformaintainablecodefromjoostvisseretalia.html",
    "utf8"
  ),
  img:
    "/static/postimages/tenguidelinesformaintainablecodefromjoostvisseretalia.jpg",
  svg:
    "/static/postimages/tenguidelinesformaintainablecodefromjoostvisseretalia.svg"
};
