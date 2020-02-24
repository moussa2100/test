import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBnWaXrY4TzKJfWQuTKa0gh6gDHVTpGSgY",
    authDomain: "notes-7190b.firebaseapp.com",
    databaseURL: "https://notes-7190b.firebaseio.com",
    projectId: "notes-7190b",
    storageBucket: "notes-7190b.appspot.com",
    messagingSenderId: "232469070171",
    appId: "1:232469070171:web:7a0e5e7e0adfd8fa1b5a7e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase; 