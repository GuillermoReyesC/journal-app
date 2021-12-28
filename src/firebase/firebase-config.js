import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCVz80tSJypLsz0T___JzE0GSEpVH61j34",
    authDomain: "react-app-cursos-64004.firebaseapp.com",
    databaseURL: "https://react-app-cursos-64004-default-rtdb.firebaseio.com",
    projectId: "react-app-cursos-64004",
    storageBucket: "react-app-cursos-64004.appspot.com",
    messagingSenderId: "545644887195",
    appId: "1:545644887195:web:4a7c8fea8958c89f8eda3e"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}