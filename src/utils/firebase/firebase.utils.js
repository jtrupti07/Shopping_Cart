import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBAw7gNxA_WfTcpbdRioKf4Q-JtRUIg7do",
    authDomain: "react-ecom-app-c6df2.firebaseapp.com",
    projectId: "react-ecom-app-c6df2",
    storageBucket: "react-ecom-app-c6df2.appspot.com",
    messagingSenderId: "583665039240",
    appId: "1:583665039240:web:7afc7f4574176c1a376c3d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signinwithGooglePopup = () => signInWithPopup(auth, provider);
export const signinwithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating user', error);
        }
    }

    return userDocRef;
}