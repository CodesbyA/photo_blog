import firebase from 'firebase/app'; 
import 'firebase/storage';
  import 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyDHgSaugDPfJGxaJRiHn3G8_meMshpoL78",
    authDomain: "blog-73467.firebaseapp.com",
    projectId: "blog-73467",
    storageBucket: "blog-73467.appspot.com",
    messagingSenderId: "289126608774",
    appId: "1:289126608774:web:719c31276e27d7dad80607"
  };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const blogStorage = firebase.storage();
 const blogFirestore = firebase.firestore();
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export {blogStorage, blogFirestore, timestamp};
 