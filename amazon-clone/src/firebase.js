// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBWR3oppGIxDbAcQjBsCY3iKOhM9ZtWTAM",
    authDomain: "clone-2831e.firebaseapp.com",
    projectId: "clone-2831e",
    storageBucket: "clone-2831e.appspot.com",
    messagingSenderId: "1095719798306",
    appId: "1:1095719798306:web:358971acb645c40cd1ec7b",
    measurementId: "G-NXXVW5NF8R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};