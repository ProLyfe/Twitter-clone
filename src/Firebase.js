import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCg4L-arANp4a73MjRBi9quN7bVdo9FYBs",
    authDomain: "twitter-clone-d09da.firebaseapp.com",
    databaseURL: "https://twitter-clone-d09da.firebaseio.com",
    projectId: "twitter-clone-d09da",
    storageBucket: "twitter-clone-d09da.appspot.com",
    messagingSenderId: "432070452779",
    appId: "1:432070452779:web:1fee01ad735a770a32ac6e",
    measurementId: "G-LVJKTKGCPW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;