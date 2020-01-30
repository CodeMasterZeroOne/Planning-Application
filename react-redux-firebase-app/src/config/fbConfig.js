import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQG1zsFYgtEcH3Zr0otfZ7BEEDnjTVGZw",
    authDomain: "planning-application-a4004.firebaseapp.com",
    databaseURL: "https://planning-application-a4004.firebaseio.com",
    projectId: "planning-application-a4004",
    storageBucket: "planning-application-a4004.appspot.com",
    messagingSenderId: "517382524700",
    appId: "1:517382524700:web:75b77815cbdb2230a674d9",
    measurementId: "G-7KVXFZ0TX0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;