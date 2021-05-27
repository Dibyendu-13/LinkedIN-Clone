import firebase from 'firebase';
import 'firebase/firestore';



const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA5P21asw69REGsELR5Cih3cfQnsHFWWjQ",
  authDomain: "linkedin-clone-780d9.firebaseapp.com",
  projectId: "linkedin-clone-780d9",
  storageBucket: "linkedin-clone-780d9.appspot.com",
  messagingSenderId: "1034538075532",
  appId: "1:1034538075532:web:ea97a2435a6ad601bb02a9"
});


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();



export { db, auth };