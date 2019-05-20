const firebase = require("firebase");
const {firebaseConfig} = require("../.env");

firebase.initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });
}
