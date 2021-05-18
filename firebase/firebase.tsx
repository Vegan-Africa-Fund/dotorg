import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyD5LoTjo8TsaD56TfqzlCG4xVribUn-gjM",
    authDomain: "veganafrica-5de2b.firebaseapp.com",
    databaseURL: "https://veganafrica-5de2b-default-rtdb.firebaseio.com",
    projectId: "veganafrica-5de2b",
    storageBucket: "veganafrica-5de2b.appspot.com",
    messagingSenderId: "52922223127",
    appId: "1:52922223127:web:0ada4c25e10d7225906a52",
    measurementId: "G-NB2CBHR19L"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const database = firebase.database()

  export {firebase, database as default} 