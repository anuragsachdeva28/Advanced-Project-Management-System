import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDST2r2p35whBrEE-DLwuU0DfPgx32Nxcs",
    authDomain: "dexpert-admin.firebaseapp.com",
    databaseURL: "https://dexpert-admin.firebaseio.com",
    projectId: "dexpert-admin",
    storageBucket: "dexpert-admin.appspot.com",
    messagingSenderId: "335823502420",
    appId: "1:335823502420:web:150738c9effc4137"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;