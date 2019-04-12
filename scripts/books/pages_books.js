const fs = require("fs");
const path = require("path");
const allBooks = fs.readdirSync("library");
const bookPagesPath = path.normalize(
  path.join(process.cwd(), "pages/library")
);
const postTemplate = fs.readFileSync(
  path.normalize(path.join(process.cwd(), "templates", "book.js")),
  "utf8"
);

// empty blog post pages dir first
fs.readdirSync(bookPagesPath).forEach(file => {
  fs.unlinkSync(path.join(bookPagesPath, file));
});

// generate blog post pages
allBooks
  .filter(book => /\.json$/.test(book))
  .forEach(book => {
    const bookCleanName = book.replace(".json", "");
    fs.writeFileSync(
      path.join(bookPagesPath, `${bookCleanName}.js`),
      postTemplate.replace(/\%\%BOOK_CLEAN_NAME\%\%/g, bookCleanName),
      "utf8"
    );
  });
