import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVzj9PkKi3prnv07rTxaf2AZpZC2r7-Fk",
    authDomain: "movieapp-e4457.firebaseapp.com",
    projectId: "movieapp-e4457",
    storageBucket: "movieapp-e4457.appspot.com",
    messagingSenderId: "566174249599",
    appId: "1:566174249599:web:2f0f76c083ffe07813454a"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
