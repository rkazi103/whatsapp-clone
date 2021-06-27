import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAL89PfBLtpAu3S877tBvk5H3hz1X0p0B0",
  authDomain: "whatsapp-clone-e5927.firebaseapp.com",
  projectId: "whatsapp-clone-e5927",
  storageBucket: "whatsapp-clone-e5927.appspot.com",
  messagingSenderId: "110601012307",
  appId: "1:110601012307:web:52218dab9f29e202ce72a6",
  measurementId: "G-K98JQ3C4RH",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
