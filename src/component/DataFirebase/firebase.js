import firebase from 'firebase/app'
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

export const creatUserProfileDocument= async(uesrAuth,addtionalData) =>{
    if(!uesrAuth) return;
    const userRef = firestore.doc(`users/${uesrAuth.uid}`)
    const snapshot = await userRef.get()
    console.log(snapshot)
    if(!snapshot.exists){
        const {displayName,email} = uesrAuth;
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
            
        }catch(error){
            console.log('error',error.message)
        }
    }
    return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

