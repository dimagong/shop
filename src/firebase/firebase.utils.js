import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVxjNGwJOCPD_fgwJSF1W_gIkhkwqRUlk",
    authDomain: "shop-db-dbfc5.firebaseapp.com",
    databaseURL: "https://shop-db-dbfc5.firebaseio.com",
    projectId: "shop-db-dbfc5",
    storageBucket: "shop-db-dbfc5.appspot.com",
    messagingSenderId: "339811403535",
    appId: "1:339811403535:web:77ef451f508f88cd42607a",
    measurementId: "G-C89NRH434Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
