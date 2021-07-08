import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  process.env.FIREBASE_CONFIG_JSON
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const database = firebase.database()

  export {firebase, database as default} 
