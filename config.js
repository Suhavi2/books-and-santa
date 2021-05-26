import firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAUg2mpcO1FogP17TLZQlqqy2Ue8QqqJ2M",
  authDomain: "book-and-santa.firebaseapp.com",
  projectId: "book-and-santa",
  storageBucket: "book-and-santa.appspot.com",
  messagingSenderId: "875621299594",
  appId: "1:875621299594:web:13f92f132764c232438473"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()