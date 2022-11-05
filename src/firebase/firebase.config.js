// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: "AIzaSyBnEvmLLX63wyunDTxD1Bql0tR08jeIUJ0",
    // authDomain: "genius-car-service-56d8a.firebaseapp.com",
    // projectId: "genius-car-service-56d8a",
    // storageBucket: "genius-car-service-56d8a.appspot.com",
    // messagingSenderId: "249647579124",
    // appId: "1:249647579124:web:d198059a6ebbca10bcc3a1",
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;