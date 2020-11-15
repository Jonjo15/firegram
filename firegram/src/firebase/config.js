import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/storage";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCEjF109kAU8w5m1KFK064BeMliOPlzy9A",
    authDomain: "firegram-42934.firebaseapp.com",
    databaseURL: "https://firegram-42934.firebaseio.com",
    projectId: "firegram-42934",
    storageBucket: "firegram-42934.appspot.com",
    messagingSenderId: "79560020393",
    appId: "1:79560020393:web:7e791ba8a65effe15af4b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()

  const projectStorage = firebase.storage()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  export {projectFirestore, projectStorage, timestamp}