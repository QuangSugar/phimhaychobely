import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export const firebaseApp = initializeApp({


  apiKey:"AIzaSyCWCqloRdfnUXfkh2gAvurH9BRgnqDShYc",authDomain:"moviebooking-4c331.firebaseapp.com",projectId:"moviebooking-4c331",storageBucket:"moviebooking-4c331.appspot.com",messagingSenderId:"1069706239104",appId:"1:1069706239104:web:f51964141e8ca7bee91a65"
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
