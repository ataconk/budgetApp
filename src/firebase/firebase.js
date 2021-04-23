import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8m1Z5ecwPHMtC-M73OlOF16SYSrmNroo",
    authDomain: "budget-app-dc870.firebaseapp.com",
    databaseURL: "https://budget-app-dc870-default-rtdb.firebaseio.com",
    projectId: "budget-app-dc870",
    storageBucket: "budget-app-dc870.appspot.com",
    messagingSenderId: "236777761622",
    appId: "1:236777761622:web:5e37ca7a2ae6fe058844f7",
    measurementId: "G-XW3ZSBLQWQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()

  export { firebase, database as default}