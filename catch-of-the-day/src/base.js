import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD63hN70iG-V0vPn24994o7SbGmfj9AX7U",
    authDomain: "catch-of-the-day-cyril-b1d19.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-cyril-b1d19-default-rtdb.firebaseio.com"
  })

  const base = Rebase.createClass(firebaseApp.database());


  //this is a named export
  export { firebase };

  //this is a default export
  export default base;