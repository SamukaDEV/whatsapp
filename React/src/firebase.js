
import * as firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBb-sBMfSnUl6GAfTJeo0-qkd7r4AWf_9U",
    authDomain: "smkdev-192.firebaseapp.com",
    databaseURL: "https://smkdev-192.firebaseio.com",
    projectId: "smkdev-192",
    storageBucket: "smkdev-192.appspot.com",
    messagingSenderId: "652993948703",
    appId: "1:652993948703:web:9cbe2a204eb7acd290792a"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
// export const database = firebase.database()