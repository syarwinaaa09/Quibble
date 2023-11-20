import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC7PdXlZ4d_slEkSwBQ3hNYroy4ixbziV0",
  authDomain: "quibble-6a920.firebaseapp.com",
  projectId: "quibble-6a920",
  storageBucket: "quibble-6a920.appspot.com",
  messagingSenderId: "152634975324",
  appId: "1:152634975324:web:997610ef3165187b837299"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
