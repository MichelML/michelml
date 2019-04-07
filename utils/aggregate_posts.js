const fs = require("fs");
const path = require("path");
const files = fs.readdirSync("blog_posts");
const normalizePath = path.normalize(path.join(process.cwd(), "blog_posts"));

const allBlogPosts = files
  .filter(file => /\.js$/.test(file))
  .reduce((allPosts, file) => {
    const blogPost = require(path.join(normalizePath, file));
    return [...allPosts, blogPost];
  }, [])
  .sort((postA, postB) => {
    const dateA = new Date(postA.date);
    const dateB = new Date(postB.date);
    return dateA - dateB;
  });

fs.writeFileSync(
  path.join(normalizePath, "allPosts.json"),
  JSON.stringify(allBlogPosts, null, 4),
  "utf8"
);
