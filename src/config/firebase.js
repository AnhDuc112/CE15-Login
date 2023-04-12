import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  getAuth,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlJM3PTNpLRI5yT_V9bCckkJ6VOyZD4r4",
  authDomain: "linen-rex-371916.firebaseapp.com",
  projectId: "linen-rex-371916",
  storageBucket: "linen-rex-371916.appspot.com",
  messagingSenderId: "687813642698",
  appId: "1:687813642698:web:55e014774ac717d9d6e733",
  measurementId: "G-DQPEZYP8S8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const google = new GoogleAuthProvider();
export const github = new GithubAuthProvider();
export const facebook = new FacebookAuthProvider();
export const auth = getAuth();
