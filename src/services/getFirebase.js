import firebase from 'firebase'

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyA6cV62EAFOkq5LrdJtDqioD-uD0KzJPgg",
    authDomain: "persistencia-en-la-nube.firebaseapp.com",
    databaseURL: "https://persistencia-en-la-nube-default-rtdb.firebaseio.com",
    projectId: "persistencia-en-la-nube",
    storageBucket: "persistencia-en-la-nube.appspot.com",
    messagingSenderId: "1093439379386",
    appId: "1:1093439379386:web:fa8110b006c54722fc6f83"
  };



const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}