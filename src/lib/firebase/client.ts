import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIxCckxJjV0FWyQVXijpFsZUvXyjOvzr8",
  authDomain: "market-boughts.firebaseapp.com",
  projectId: "market-boughts",
  storageBucket: "market-boughts.appspot.com",
  messagingSenderId: "410455492809",
  appId: "1:410455492809:web:60919ce523ca2bce4ea518",
  measurementId: "G-8TEHJ7D5EL",
};

export const app = initializeApp(firebaseConfig);
