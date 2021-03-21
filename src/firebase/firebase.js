import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeb_oPh918zX4Fo1ZvsTht1i714JE-RAc",
  authDomain: "react-contact-list-dc8ff.firebaseapp.com",
  projectId: "react-contact-list-dc8ff",
  storageBucket: "react-contact-list-dc8ff.appspot.com",
  messagingSenderId: "729228343801",
  appId: "1:729228343801:web:92a6c21c79f1228864a528"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;

  