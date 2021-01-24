import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArGovUJcoHE8sOw_xgf1nvG4byTbYSx7w",
    authDomain: "react-contacts-list-85fdd.firebaseapp.com",
    projectId: "react-contacts-list-85fdd",
    storageBucket: "react-contacts-list-85fdd.appspot.com",
    messagingSenderId: "462654718830",
    appId: "1:462654718830:web:649284ca451e39a0a6b77f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;