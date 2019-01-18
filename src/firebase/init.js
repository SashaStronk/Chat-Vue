import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDe-XMpJOsYURFt5HJwrsYgQTqwQ5kGHWg',
  authDomain: 'udemy-ninja-chat-e44dd.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-chat-e44dd.firebaseio.com',
  projectId: 'udemy-ninja-chat-e44dd',
  storageBucket: 'udemy-ninja-chat-e44dd.appspot.com',
  messagingSenderId: '379210644447'
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
