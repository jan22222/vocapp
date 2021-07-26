

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBdsKPQnRLQVwFJ6AEIgJki9oM5DPfoE10",
    authDomain: "test-5b48c.firebaseapp.com",
    projectId: "test-5b48c",
    storageBucket: "test-5b48c.appspot.com",
    messagingSenderId: "434445872470",
    appId: "1:434445872470:web:7318f60d5a7a8783a67af7",
    measurementId: "G-QPN46KKZ4K"
  };
  // Initialize Firebase
  


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();