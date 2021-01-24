import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.default.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  // apiKey: "AIzaSyCS0mavhokVQFsVerDgLhog5YJt__PacD0",
  // authDomain: "meusite-736cb.firebaseapp.com",
  // databaseURL: "https://meusite-736cb.firebaseio.com",
  // projectId: "meusite-736cb",
  // storageBucket: "meusite-736cb.appspot.com",
  // messagingSenderId: "393788846078"
});

export default app;
