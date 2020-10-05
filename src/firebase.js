import firebase from 'firebase';
// import firebase from '@firebase/app';
// // import * as firebase from 'firebase'
// import '@firebase/functions'

const firebaseConfig = {
    apiKey: "AIzaSyC7VQ_QFUZTHI8w4Whk6qhiPDcRxyo4vNI",
    authDomain: "tinder-clone-98d1b.firebaseapp.com",
    databaseURL: "https://tinder-clone-98d1b.firebaseio.com",
    projectId: "tinder-clone-98d1b",
    storageBucket: "tinder-clone-98d1b.appspot.com",
    messagingSenderId: "778137041389",
    appId: "1:778137041389:web:6dad54685b16cb7e0f4fe4",
    measurementId: "G-S8Q38T8M5T"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;