const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { last } = require("lodash");
const googleBooksAPIKey = "AIzaSyBCSDKD-C8D1aqRV3PlnMmVyprfsj0Pabk";
const googleBooksAPI = "https://www.googleapis.com/books/v1/volumes";

const rmSpecialChars = str => str.replace(/[^A-Z0-9]/gi, "");

axios
  .get(googleBooksAPI, {
    params: {
      key: googleBooksAPIKey,
      q: last(process.argv),
      printType: "books",
      projection: "full",
      orderBy: "relevance"
    }
  })
  .then(res => {
    const book = res.data.items[0];
    const cleanName = rmSpecialChars(book.volumeInfo.title).toLowerCase();
    fs.writeFileSync(
      path.join(
        process.cwd(),
        "library",
        `${cleanName}.json`
      ),
      JSON.stringify({cleanName, ...book}, null, 4),
      "utf8"
    );
  });
