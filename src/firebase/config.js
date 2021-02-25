import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQcV-LQjomM9RWyU9trmi9YUQEg23YVFE",
    authDomain: "stories-66b59.firebaseapp.com",
    projectId: "stories-66b59",
    storageBucket: "stories-66b59.appspot.com",
    messagingSenderId: "610045957637",
    appId: "1:610045957637:web:a382d5fa4cc82598426e6c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
