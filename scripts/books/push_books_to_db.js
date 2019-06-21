const fs = require("fs");
const path = require("path");
const firebase = require("firebase-admin");
const { firebaseAdminConfig, firebaseDataBaseURL } = require("../../.env");
const libraryPath = path.join(process.cwd(), "library");
const books = fs.readdirSync(libraryPath).filter(book => /\.json$/.test(book));

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAdminConfig),
  databaseURL: firebaseDataBaseURL
});

(async () => {
  for (let bookPath of books) {
    const book = require(path.join(libraryPath, bookPath));
    await firebase
      .firestore()
      .collection("books")
      .doc(book.cleanName)
      .set(book)
      .catch(console.log)
      .then(data => {
        console.log(data);
        console.log(book.volumeInfo.title + " was successfully updated.");
      });
  }
})();
