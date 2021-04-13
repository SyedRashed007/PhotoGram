import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyDmGWkZCXoZKp_ljTVLsHCoPAX0vfmwjwI",
    authDomain: "photogram-c3264.firebaseapp.com",
    projectId: "photogram-c3264",
    storageBucket: "photogram-c3264.appspot.com",
    messagingSenderId: "589576285997",
    appId: "1:589576285997:web:0301297418e8cdbeaeada4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp }