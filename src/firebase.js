import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5yQrPnfe8yXsEC62R0tDsI0THHZ1fCg8",
    authDomain: "linkedin-clone-x.firebaseapp.com",
    projectId: "linkedin-clone-x",
    storageBucket: "linkedin-clone-x.appspot.com",
    messagingSenderId: "905859546316",
    appId: "1:905859546316:web:6f3309f91ed81545e55669",
    measurementId: "G-Z9P03R3NPR"
  };

  const firebaseApp = firebase.initilizeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth};