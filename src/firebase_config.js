// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuEeHLpfiYxIj3gwYhGkdXixaK6IVj3VM",
  authDomain: "todo-app-2-423ce.firebaseapp.com",
  projectId: "todo-app-2-423ce",
  storageBucket: "todo-app-2-423ce.appspot.com",
  messagingSenderId: "1022798548183",
  appId: "1:1022798548183:web:6aaa741201504abe38b492"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db};