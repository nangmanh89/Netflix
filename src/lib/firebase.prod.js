import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import seedDatabase from '../seed';

// config firebase
const config = {
    apiKey: 'AIzaSyBvXwtp_qWWBEe-VywcVohOMLpiyVAUUoY',
    authDomain: 'netflix-de234.firebaseapp.com',
    projectId: 'netflix-de234',
    storageBucket: 'netflix-de234.appspot.com',
    messagingSenderId: '557223147056',
    appId: '1:557223147056:web:791be873d632b4c65b1ff5',
};

// Initialize Firebase
const firebase = initializeApp(config);

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(firebase);
// seedDatabase(db);

export { firebase };
