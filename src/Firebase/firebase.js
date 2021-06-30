import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_lfo98ieo8aYKd_AnevfOhbZm5G5qJsU",
    authDomain: "storage-cloud-e3b61.firebaseapp.com",
    projectId: "storage-cloud-e3b61",
    storageBucket: "storage-cloud-e3b61.appspot.com",
    messagingSenderId: "946087568595",
    appId: "1:946087568595:web:9c5d9c47583d2411c06026"
})

export const auth = firebaseApp.auth()
export default firebaseApp;



