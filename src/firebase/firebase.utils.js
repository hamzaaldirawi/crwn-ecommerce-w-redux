import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOgIeOfg-kbfdhZbnwU4UErcMpD2HFOYY",
    authDomain: "crwn-db-h.firebaseapp.com",
    projectId: "crwn-db-h",
    storageBucket: "crwn-db-h.appspot.com",
    messagingSenderId: "548985872355",
    appId: "1:548985872355:web:4e0a79694c9224bb6e4ad6",
    measurementId: "G-KLDKJD7ZTF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;