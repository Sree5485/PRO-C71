import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBMuW8A97qPnQOX-0KMU1PmBqp8bRbgmQ8",
    authDomain: "e-ride-b2193.firebaseapp.com",
    databaseURL: "https://e-ride-b2193-default-rtdb.firebaseio.com",
    projectId: "e-ride-b2193",
    storageBucket: "e-ride-b2193.appspot.com",
    messagingSenderId: "1024379563513",
    appId: "1:1024379563513:web:5d2f4bb3396ea49f2c2128"
  };





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


