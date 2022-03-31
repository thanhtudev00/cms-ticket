
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyAXxdok0IxP4t49tJUxjZUUh0R1alolppE",
    authDomain: "ticket-sale-8e883.firebaseapp.com",
    projectId: "ticket-sale-8e883",
    storageBucket: "ticket-sale-8e883.appspot.com",
    messagingSenderId: "1042785388572",
    appId: "1:1042785388572:web:ca2992f12a151a864337d9"
})

// Initialize Firebase
const test = firebase.firestore().collection('tickets');
const test2 = firebase.firestore().collection('comboTickets');
export { test, test2 };
export default firebase;