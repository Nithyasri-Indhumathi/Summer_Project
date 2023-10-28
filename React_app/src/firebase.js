import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlBo0go6H-oqayrtYlQ1to1kCXVn15mgc",
  authDomain: "subdivider-info.firebaseapp.com",
  projectId: "subdivider-info",
  storageBucket: "subdivider-info.appspot.com",
  messagingSenderId: "399466705045",
  appId: "1:399466705045:web:ced4ecd285ee0e1bcbab9c"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
