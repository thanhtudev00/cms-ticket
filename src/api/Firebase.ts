import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChe6gi-XNSoeccWc6I5aCl10trOCtOcqg",
    authDomain: "cms-ticket-sale-d4ae7.firebaseapp.com",
    projectId: "cms-ticket-sale-d4ae7",
    storageBucket: "cms-ticket-sale-d4ae7.appspot.com",
    messagingSenderId: "1058004029176",
    appId: "1:1058004029176:web:eb3837c0e6178dd78b750d",
    measurementId: "G-EE7526PZNW"
};

const store = !firebase.apps.length ? firebase.initializeApp(firebaseConfig).firestore() : firebase.app().firestore();

const taskStore = store.collection('tickets');

console.log(taskStore);

// connect tikets

const api = {
    fetchAll: <T>(): Promise<T[] | firebase.firestore.DocumentData[] | undefined> => {
        const data = taskStore.get().then((snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData | T>) => {
            return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        })
        return data
    },
    fetchOne: <T>(id: string): Promise<T | firebase.firestore.DocumentData | undefined> => {
        const data = taskStore.doc(id).get().then((doc) => {
            return doc.data()
        })
        console.log("task with id: ", data)
        return data
    },
}

console.log(api.fetchAll);

export default api;


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);