const fs = require("fs");
const path = require("path");
const { take } = require("lodash");
const files = fs.readdirSync("blogposts");
const blogpostsPath = path.normalize(path.join(process.cwd(), "blogposts"));
const staticBlogpostsPath = path.normalize(
  path.join(process.cwd(), "static/blogposts")
);

const writeFile = (filePath, file, content) => {
  fs.writeFileSync(
    path.join(filePath, file),
    JSON.stringify(content, null, 4),
    "utf8"
  );
};

const sortByDate = (postA, postB) => {
  const dateA = new Date(postA.date);
  const dateB = new Date(postB.date);
  return -(dateA - dateB);
};

const allBlogPosts = files
  .filter(file => /\.js$/.test(file))
  .map(file => file.replace(/\.js$/, ".json"))
  .reduce((allPosts, file) => {
    const blogPost = require(path.join(blogpostsPath, file));
    writeFile(blogpostsPath, file, blogPost);
    writeFile(staticBlogpostsPath, file, blogPost);
    return [...allPosts, blogPost];
  }, [])
  .sort(sortByDate);

writeFile(process.cwd(), "recentPosts.json", take(allBlogPosts, 3));
writeFile(process.cwd(), "allPosts.json", allBlogPosts);
