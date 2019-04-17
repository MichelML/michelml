const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { last } = require("lodash");
const googleBooksAPIKey = "AIzaSyBCSDKD-C8D1aqRV3PlnMmVyprfsj0Pabk";
const googleBooksAPI = "https://www.googleapis.com/books/v1/volumes";
const _ = require("lodash");
const yargs = require("yargs");
yargs.array("books");
const { books } = yargs.argv;

const rmSpecialChars = str => str.replace(/[^A-Z0-9]/gi, "");

(async () => {
  const allBooks = books || [last(process.argv)];

  for (book of allBooks) {
    await axios
      .get(googleBooksAPI, {
        params: {
          key: googleBooksAPIKey,
          q: book,
          printType: "books",
          projection: "full",
          orderBy: "relevance"
        }
      })
      .then(res => {
        const bookData = res.data.items[0];
        let cleanName = rmSpecialChars(bookData.volumeInfo.title).toLowerCase();
        if (
          fs.existsSync(
            path.join(process.cwd(), "library", `${cleanName}.json`)
          )
        ) {
          cleanName += _.uniqueId();
        }
        fs.writeFileSync(
          path.join(process.cwd(), "library", `${cleanName}.json`),
          JSON.stringify(
            { cleanName, originalQuery: book, ...bookData },
            null,
            4
          ),
          "utf8"
        );
      });
  }
})();
