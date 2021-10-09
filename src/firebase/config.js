import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { config } from "dotenv";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

config();
// require('firebase').default
// require('firebase/app').default


// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/first
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_AprojectAuthPP_ID
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_API_KEY),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});

export { projectStorage, projectFirestore, projectAuth, timestamp };



