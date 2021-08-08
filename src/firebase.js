// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//

import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBeX8SwppH-DWx5dBuwezOl-roLSTjsNns',
  authDomain: 'todo-app-63cda.firebaseapp.com',
  projectId: 'todo-app-63cda',
  storageBucket: 'todo-app-63cda.appspot.com',
  messagingSenderId: '96403284361',
  appId: '1:96403284361:web:e18fc1b3c259bbd7c10158',
  measurementId: 'G-3YGM0946K7',
});

const db = firebaseApp.firestore();
export default db;
