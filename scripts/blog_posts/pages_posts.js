const fs = require("fs");
const path = require("path");
const allBlogPosts = fs.readdirSync("blog_posts");
const blogPostPagesPath = path.normalize(
  path.join(process.cwd(), "pages/blog")
);
const postTemplate = fs.readFileSync(
  path.normalize(path.join(process.cwd(), "templates", "post.js")),
  "utf8"
);

// empty blog post pages dir first
fs.readdirSync(blogPostPagesPath).forEach(file => {
  fs.unlinkSync(path.join(blogPostPagesPath, file));
});

// generate blog post pages
allBlogPosts
  .filter(blogPost => /\.json$/.test(blogPost))
  .forEach(blogPost => {
    const postCleanName = blogPost.replace(".json", "");
    fs.writeFileSync(
      path.join(blogPostPagesPath, `${postCleanName}.js`),
      postTemplate.replace(/\%\%POST_CLEAN_NAME\%\%/g, postCleanName),
      "utf8"
    );
  });
