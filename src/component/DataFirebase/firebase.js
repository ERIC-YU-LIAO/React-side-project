import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAAWN6KjI4yYDRrPg5dfpWfzTICNvKUKdo",
    authDomain: "side-project-shopping.firebaseapp.com",
    databaseURL: "https://side-project-shopping.firebaseio.com",
    projectId: "side-project-shopping",
    storageBucket: "side-project-shopping.appspot.com",
    messagingSenderId: "505337947931",
    appId: "1:505337947931:web:31646b4c5e0df0ae0d15be",
    measurementId: "G-ERHXT360HV"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

