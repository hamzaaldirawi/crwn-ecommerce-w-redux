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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (error) {
        console.log('error creating Profile', error.message);
    } 
  }

  return userRef;
};
// Just to add shop-date to firebase we can delete it, but it's not bad if we kept it
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // to make our request as one big request if failed fail everything, if ok complete
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // create unique ID
    batch.set(newDocRef, obj); // insted of newDocRef.set to batch our request
  });

  return await batch.commit(); // to commit our request, it's a promise, when promise succed or failed
  //async because we wait for response 
};

// function to get data(map) from snapshot from collections 
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data(); // because we only need title and items
    
    return {
      routeName: encodeURI(title.toLowerCase()), //pass it some string and give you back some strings that u can't handle and convert it to what URL can read 
      id: doc.id,
      title,
      items
    }
  });
  
  // this step to add our shop-data from firebase to reducer 
  // first we do this func below just to return for example hats property to hats collection and so fat until we get final object
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;