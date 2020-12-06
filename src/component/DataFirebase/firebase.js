import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import collection from '../collection/collection';
// import collection from '../collection/collection';


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
if(!firebase.apps.length){
    firebase.initializeApp(config);
}


export const creatUserProfileDocument= async(uesrAuth,addtionalData) =>{
    if(!uesrAuth) return;
    const userRef = firestore.doc(`users/${uesrAuth.uid}`)
    //ex...
    // const userRef = firestore.doc(`users/ccc`)
    console.log(userRef)
    const collectionRef = firestore.collection('users')
    const snapShot = await userRef.get()
    const collectionSnapshot = await collectionRef.get()
    console.log({collectionSnapshot});
    console.log({collection: collectionSnapshot.docs.map((doc)=> doc.data())})

    // console.log(snapshot)
    if(!snapShot.exists){
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


//新增 doc collection mehtods on firebase 
export const addCollectionAndDocuments = async(collectionKey , objectsToAdd) =>{
   const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj =>{
        // 新開一個collection 
        const newDocRef = collectionRef.doc();
        console.log('newDocRef',newDocRef)
        //fill in obj 在doc 內
        batch.set(newDocRef,obj)
      });
     return await batch.commit()
}

// Bring new collection from firebase     
export const coverColletionsSnapshotToMap= (collection) =>{
    const transfromedCollection = collection.docs.map(doc =>{
        const {title,items} = doc.data()
        return{
            routeName: encodeURI,
            id: doc.id,
            title,
            items
        }
    })
    //回傳的是 accmulator[title] = collection
    return transfromedCollection.reduce((accmulator,collection) =>{
        accmulator[collection.title] = collection;
        return accmulator
    },{})

    console.log(transfromedCollection)
}








export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

