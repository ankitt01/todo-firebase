// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW9largGxTmcU7HiDJjyzSEZOatUAkXro",
  authDomain: "todo-app-87f22.firebaseapp.com",
  projectId: "todo-app-87f22",
  storageBucket: "todo-app-87f22.appspot.com",
  messagingSenderId: "35981425626",
  appId: "1:35981425626:web:c2e6b8b16a238479991ee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db};