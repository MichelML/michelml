const fs = require("fs");
const path = require("path");
const normalizePath = path.normalize(path.join(process.cwd(), "library"));

const allBooks = fs
  .readdirSync("library")
  .reduce((books, file) => {
    // console.log(file);process.exit();
    const book = require(path.join(normalizePath, file));
    return [...books, book];
  }, [])
  .sort((bookA, bookB) => {
    return bookA.volumeInfo.title
      .toLowerCase()
      .localeCompare(bookB.volumeInfo.title.toLowerCase());
  });

fs.writeFileSync(
  path.join(process.cwd(), "allBooks.json"),
  JSON.stringify(allBooks, null, 4),
  "utf8"
);
