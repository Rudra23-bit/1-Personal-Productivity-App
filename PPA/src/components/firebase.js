import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
 apiKey: "AIzaSyBjObLtBG13IVAz8NCatggFdoY5D64i_5U",
  authDomain: "personal-productivity-ap-b2102.firebaseapp.com",
  projectId: "personal-productivity-ap-b2102",
  storageBucket: "personal-productivity-ap-b2102.firebasestorage.app",
  messagingSenderId: "31895794826",
  appId: "1:31895794826:web:832db6ab375270ea37e973"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app); 


export default app;