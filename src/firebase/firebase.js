import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsFzu5oI25HizIxAlgJh4_qslvgsJbacE",
  authDomain: "blobit-6aecc.firebaseapp.com",
  projectId: "blobit-6aecc",
  storageBucket: "blobit-6aecc.appspot.com",
  messagingSenderId: "529442384149",
  appId: "1:529442384149:web:5ee5876d5c22c36090e11c",
  measurementId: "G-S58HBEGCPS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDB = getStorage(app);