import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsixe9aeH9oL48K6CFMhGvicK8aIYuKgk",
  authDomain: "linkdin-364f1.firebaseapp.com",
  projectId: "linkdin-364f1",
  storageBucket: "linkdin-364f1.appspot.com",
  messagingSenderId: "960915121811",
  appId: "1:960915121811:web:008c1620b0d1e294c04f66",
  measurementId: "G-B3JDVJ6QWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, app, storage };
