import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDmIFdUOEzH5QSjS8hg4Bg1ObXFwWT_oJo",
    authDomain: "memo-webapp-e59fe.firebaseapp.com",
    projectId: "memo-webapp-e59fe",
    storageBucket: "memo-webapp-e59fe.appspot.com",
    messagingSenderId: "303334112000",
    appId: "1:303334112000:web:a5723da4424a8fb86b91e5",
    measurementId: "G-Y8M5G7XCGW"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

console.log(db);

