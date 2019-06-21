const fs = require("fs");
const path = require("path");
const firebase = require("firebase-admin");
const { firebaseAdminConfig, firebaseDataBaseURL } = require("../../.env");
const blogpostsPath = path.join(process.cwd(), "blogposts");
const posts = fs
  .readdirSync(blogpostsPath)
  .filter(post => /\.json$/.test(post));

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseAdminConfig),
  databaseURL: firebaseDataBaseURL
});

(async () => {
  for (let postName of posts) {
    const post = require(path.join(blogpostsPath, postName));
    await firebase
      .firestore()
      .collection("posts")
      .doc(post.cleanName)
      .set(post)
      .catch(console.log)
      .then(data => {
        console.log(data);
        console.log(post.name + " was successfully updated.");
      });
  }
})();
