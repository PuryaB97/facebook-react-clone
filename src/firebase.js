import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtcisSQ12BbduPsK7eZd181eLomqVAarM",
  authDomain: "facebook-clone-5e4a9.firebaseapp.com",
  databaseURL: "https://facebook-clone-5e4a9.firebaseio.com",
  projectId: "facebook-clone-5e4a9",
  storageBucket: "facebook-clone-5e4a9.appspot.com",
  messagingSenderId: "516884270324",
  appId: "1:516884270324:web:ab685e72fe95919943e2a1",
  measurementId: "G-VLSKEM5PZE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
