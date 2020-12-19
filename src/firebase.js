import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-1ugDjniJDycJQUYNawuujBSZL9awRGI",
  authDomain: "tinder-clone-e2413.firebaseapp.com",
  databaseURL: "https://tinder-clone-e2413.firebaseio.com",
  projectId: "tinder-clone-e2413",
  storageBucket: "tinder-clone-e2413.appspot.com",
  messagingSenderId: "427087914842",
  appId: "1:427087914842:web:0b05f99540b886d0d5f563"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;