// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getDatabase } from "firebase/database" //importing the module to connect to my realtime database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwxfCdVowOFsoQtNpuna0EhomDEdFLges",
  authDomain: "vue-project-test-8d1d4.firebaseapp.com",
  projectId: "vue-project-test-8d1d4",
  storageBucket: "vue-project-test-8d1d4.appspot.com",
  messagingSenderId: "918365899293",
  appId: "1:918365899293:web:f5d4cfbc16eda8473bd4f4",
  measurementId: "G-GEWSRQ9JWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); //initilizing app for our db config

export{db}