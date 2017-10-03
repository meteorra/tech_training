import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyASpmhE2Pzxi9fcc5fcjTe9Qi23-XtlOEM",
    authDomain: "tech-training.firebaseapp.com",
    databaseURL: "https://tech-training.firebaseio.com",
    projectId: "tech-training",
    storageBucket: "",
    messagingSenderId: "181906610759"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
