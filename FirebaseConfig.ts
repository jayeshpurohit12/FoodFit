import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCdrv8oT1zhvdzvWYAktawdxWgSp4w-pU",
  authDomain: "foodfit-76fe0.firebaseapp.com",
  projectId: "foodfit-76fe0",
  storageBucket: "foodfit-76fe0.appspot.com",
  messagingSenderId: "815679838108",
  appId: "1:815679838108:web:4d5c5213a565a917e41a59",
  measurementId: "G-R6E5LLEMNK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
