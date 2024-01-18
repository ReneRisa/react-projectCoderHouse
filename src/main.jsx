import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG6WiVWCZh5P0QdamLY36qLwVm38IqVcQ",
  authDomain: "coderhouse-project-6a3c3.firebaseapp.com",
  projectId: "coderhouse-project-6a3c3",
  storageBucket: "coderhouse-project-6a3c3.appspot.com",
  messagingSenderId: "339860567244",
  appId: "1:339860567244:web:d98c241af9f9c251237e69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
