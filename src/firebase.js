import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDpeYVcJgOeDIiJLfgHp-Yjmtyeoy6XkdY",
    authDomain: "mail-application-react.firebaseapp.com",
    projectId: "mail-application-react",
    storageBucket: "mail-application-react.appspot.com",
    messagingSenderId: "402045967930",
    appId: "1:402045967930:web:ca99c8850f798046fddf03"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export {db}