import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const FIRE_config=  {
    apiKey: "AIzaSyATAuDpjyg82wE8IDUCRNutbZ4iSTsTlqo",
    authDomain: "clothing-store-ed0a8.firebaseapp.com",
    projectId: "clothing-store-ed0a8",
    storageBucket: "clothing-store-ed0a8.appspot.com",
    messagingSenderId: "794421724086",
    appId: "1:794421724086:web:bda6d5b0a89b48f407f717",
    measurementId: "G-D95P9T5HB0"
  };
export const CreateUserProfile=async (userAuth,details) => {
  if(!userAuth) return;
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot=await userRef.get();
  if(!userSnapshot.exists)
  {
    const {displayName,email}=userAuth;
    const createDate=new Date();
    try{
      await userRef.set({
        DisplayName:displayName,
        Email:email,
        CreatedDate:createDate,
        ...details
      });
    }catch(error){
      console.log(error);
    }
  }
  return userRef;
};


firebase.initializeApp(FIRE_config);
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignUpWithGoogle= ()=>firebase.auth().signInWithPopup(provider);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
export default firebase;


