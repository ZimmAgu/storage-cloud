import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_lfo98ieo8aYKd_AnevfOhbZm5G5qJsU",
    authDomain: "storage-cloud-e3b61.firebaseapp.com",
    projectId: "storage-cloud-e3b61",
    storageBucket: "storage-cloud-e3b61.appspot.com",
    messagingSenderId: "946087568595",
    appId: "1:946087568595:web:9c5d9c47583d2411c06026"
})

const auth = firebaseApp.auth();
const firestorage = firebaseApp.firestore();

const userCollections = {
    folders: firestorage.collection('folders'),
    files: firestorage.collection('files'),
    timeStamp: firebase.firestore.FieldValue.serverTimestamp
}

export default firebaseApp;
export {auth, userCollections}



