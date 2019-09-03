import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBt72XyYFulIDATXdJsfEPQsHIRWlW8uA8",
  authDomain: "capstone-ccb786.firebaseapp.com",
  databaseURL: "https://capstone-ccb786.firebaseio.com",
  projectId: "capstone-ccb786",
  storageBucket: "capstone-ccb786.appspot.com",
  messagingSenderId: "835017476260",
  appId: "1:835017476260:web:e32d33efca273ae1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;