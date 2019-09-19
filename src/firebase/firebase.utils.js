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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check if a user is logged in
  if (!userAuth) return
  // retreive documentRef (path to data in the database) from the user
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  // retreive the data from the user
  const snapShot = await userRef.get()
  // if user is not in database yet, store it
  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore =firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
