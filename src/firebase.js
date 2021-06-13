import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIkF89e9KsSr5g_aLslcCwGRxqPudBgNs",
  authDomain: "clone-18d1d.firebaseapp.com",
  databaseURL: "https://clone-18d1d.firebaseio.com",
  projectId: "clone-18d1d",
  storageBucket: "clone-18d1d.appspot.com",
  messagingSenderId: "210889173706",
  appId: "1:210889173706:web:8bfcf8b80c2f606eb36233",
  measurementId: "G-HL1VH7GMHX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };