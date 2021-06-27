import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBqdXCsI-Rmbe51gvg9j0OsmJ-HgAidWXQ",
    authDomain: "login-form-development.firebaseapp.com",
    projectId: "login-form-development",
    storageBucket: "login-form-development.appspot.com",
    messagingSenderId: "1090172738170",
    appId: "1:1090172738170:web:2f505686bb41fbfab0f9c3"
})

export const auth = firebaseApp.auth()
export default firebaseApp;



