import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9FiNRJ6TsSIxEt3bBd2GtlkKWVAPSc3c",
  authDomain: "liam-pet-store.firebaseapp.com",
  projectId: "liam-pet-store",
  storageBucket: "liam-pet-store.appspot.com",
  messagingSenderId: "461616901419",
  appId: "1:461616901419:web:868f903059474cba1d696e"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

