// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrUsO96zYLZE_2rz6hnRKHASWsmFT40lY",
  authDomain: "trello-clone-ad8cd.firebaseapp.com",
  projectId: "trello-clone-ad8cd",
  storageBucket: "trello-clone-ad8cd.appspot.com",
  messagingSenderId: "963273037861",
  appId: "1:963273037861:web:f6978ee69f94871df607cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;