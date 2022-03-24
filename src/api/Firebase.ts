import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


firebase.initializeApp ( {
    apiKey: "AIzaSyChe6gi-XNSoeccWc6I5aCl10trOCtOcqg",
    authDomain: "cms-ticket-sale-d4ae7.firebaseapp.com",
    projectId: "cms-ticket-sale-d4ae7",
    storageBucket: "cms-ticket-sale-d4ae7.appspot.com",
    messagingSenderId: "1058004029176",
    appId: "1:1058004029176:web:eb3837c0e6178dd78b750d",
    measurementId: "G-EE7526PZNW"
});

const storeTickets = firebase.firestore().collection('tickets');

export { storeTickets };
export default firebase;