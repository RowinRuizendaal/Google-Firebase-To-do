import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
    apiKey: `${__myapp.env.apiKey}`,
    authDomain: __myapp.env.authDomain,
    projectId: __myapp.env.projectId,
});

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();