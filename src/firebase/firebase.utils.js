import firebase from 'firebase/app'
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth'

const config = {
  apiKey: "AIzaSyAH9ogmE-o8CA5YP1naorkvBR6sidOc3TY",
  authDomain: "crwn-db-db911.firebaseapp.com",
  databaseURL: "https://crwn-db-db911.firebaseio.com",
  projectId: "crwn-db-db911",
  storageBucket: "",
  messagingSenderId: "254991067554",
  appId: "1:254991067554:web:7904db0a99c0f0565eaafb"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore =firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
