import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA4_ncAtsZRmmmGeMD9y9MBAqgq0qJmbRQ",
    authDomain: "autosstore-ca6e9.firebaseapp.com",
    projectId: "autosstore-ca6e9",
    storageBucket: "autosstore-ca6e9.appspot.com",
    messagingSenderId: "1012023062908",
    appId: "1:1012023062908:web:db45758b34b355e6a934f9"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirestore(){
      return firebase.firestore(app)
  }