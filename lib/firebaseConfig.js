import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKVD6XGP7n6HR0J-kt-aR1xHNF3wH4tuw",
  authDomain: "aslamreact.firebaseapp.com",
  projectId: "aslamreact",
  storageBucket: "aslamreact.appspot.com",
  messagingSenderId: "558067525141",
  appId: "1:558067525141:web:95d3da868f3109d8c6901c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);