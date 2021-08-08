import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD_SWr_ze4Sh4LWzPdi_auGw6rRnu6hvIw",
  authDomain: "capstone-firegram.firebaseapp.com",
  projectId: "capstone-firegram",
  storageBucket: "capstone-firegram.appspot.com",
  messagingSenderId: "67426202286",
  appId: "1:67426202286:web:4ea0c4f5a25a9cbd6e333f",
  measurementId: "G-N7KR4MBTH5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
