import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyC0clJU97-WObxa2y8j38WJ5bZHOYhBML0",
  authDomain: "linked-48828.firebaseapp.com",
  projectId: "linked-48828",
  storageBucket: "linked-48828.appspot.com",
  messagingSenderId: "208609580314",
  appId: "1:208609580314:web:66325487d44b5badf208a3"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = firebase.auth();

export{db,auth}