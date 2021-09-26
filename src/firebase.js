import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlsZR47lW2Rcm-WzKE7uiNkC8Q7oeky1E",
  authDomain: "tesla-clone-cb991.firebaseapp.com",
  projectId: "tesla-clone-cb991",
  storageBucket: "tesla-clone-cb991.appspot.com",
  messagingSenderId: "488989531114",
  appId: "1:488989531114:web:80346b4a4957011237f093",
  measurementId: "G-4FFQ6611QY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
