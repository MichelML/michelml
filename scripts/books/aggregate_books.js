const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const normalizePath = path.normalize(path.join(process.cwd(), "library"));

const allBooks = fs
  .readdirSync("library")
  .reduce((books, file) => {
    const book = require(path.join(normalizePath, file));
    return [...books, book];
  }, [])
  .sort((bookA, bookB) => {
    return bookA.volumeInfo.title
      .toLowerCase()
      .localeCompare(bookB.volumeInfo.title.toLowerCase());
  });

// Add metadata
// 1. Reading status
const readingStatus = allBooks.reduce(
  (statusesCount, book) => {
    if (!!book.readingStatus) {
      return {
        ...statusesCount,
        [book.readingStatus]: statusesCount[book.readingStatus] + 1
      };
    } else {
      return { ...statusesCount, Unknown: statusesCount["Unknown"] + 1 };
    }
  },
  {
    Read: 0,
    Unread: 0,
    Unknown: 0,
    Skimmed: 0
  }
);

// 2. Book review
const bookReview = allBooks.reduce(
  (bookReviewCount, book) => {
    if (!!book.bookReview) {
      return {
        ...bookReviewCount,
        "Has review": bookReviewCount["Has review"] + 1
      };
    } else {
      return {
        ...bookReviewCount,
        "No review": bookReviewCount["No review"] + 1
      };
    }
  },
  {
    "Has review": 0,
    "No review": 0
  }
);

// 2. Book review
const categories = allBooks.reduce((categoriesCount, book) => {
  const bookCategories = _.get(book, "volumeInfo.categories", []);
  bookCategories.forEach(category => {
    if (!categoriesCount[category]) {
      categoriesCount[category] = 1;
    } else {
      categoriesCount[category] = categoriesCount[category] + 1;
    }
  });
  return categoriesCount;
}, {});

const booksWithMetaData = {
  facetCount: {
    all: { ...readingStatus, ...bookReview, ...categories },
    readingStatus,
    bookReview,
    categories
  },
  books: allBooks
};

// Write aggregated books
fs.writeFileSync(
  path.join(process.cwd(), "allBooks.json"),
  JSON.stringify(booksWithMetaData, null, 4),
  "utf8"
);
