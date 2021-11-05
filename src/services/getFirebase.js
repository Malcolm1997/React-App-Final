import firebase from 'firebase'

import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDPombtAnkOWq68yj9aS3hf20Ke48Kdddc",
  authDomain: "proyectofinalreact-47bb5.firebaseapp.com",
  projectId: "proyectofinalreact-47bb5",
  storageBucket: "proyectofinalreact-47bb5.appspot.com",
  messagingSenderId: "85154356003",
  appId: "1:85154356003:web:b8fefd2c1d077cfc3cca96"
};



const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}