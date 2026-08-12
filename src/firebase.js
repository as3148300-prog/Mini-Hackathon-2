import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBD5moPKXdxUxC9Hjwa46Wp_LQJreLvJmU",
  authDomain: "webstore-c1c4d.firebaseapp.com",
  projectId: "webstore-c1c4d",
  storageBucket: "webstore-c1c4d.firebasestorage.app",
  messagingSenderId: "398066667216",
  appId: "1:398066667216:web:ac37e6b8d22294881a58d5",
  measurementId: "G-25TVZ1S1RB"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);