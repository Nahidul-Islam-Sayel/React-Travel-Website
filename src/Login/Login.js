import React from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import facebook from '../Data/Icon/fb.png';
import google from '../Data/Icon/google.png';
import'./Login.css'
import { getAuth,  FacebookAuthProvider , createUserWithEmailAndPassword , signInWithPopup , getRedirectResult, GoogleAuthProvider , signInWithEmailAndPassword} from "firebase/auth";
import firebaseConfig from './firebaseconfig'
import { initializeApp } from 'firebase/app';
import { useContext } from 'react';
import { userContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';
const provider = new GoogleAuthProvider();
const providerr = new FacebookAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const Login = () => {
  const[ user , loginUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
   const emails = document.getElementById("emaill");
   const passwords = document.getElementById("passwordl");
   let email="",password="";
   if(emails && passwords){
    email=emails.value;
    password=passwords.value;
   }
   const onsubmit=()=>{
  
  
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    loginUser(email);
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      }  
      const ongoogole=()=>{
        
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const {displayName, email} = result.user;
          const signedInUser = {name: displayName, email: email} 
          loginUser(signedInUser);
          history.replace(from);
            
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorMessage);
          // ...
        });
    
      }
      const onfacebook=()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
    
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
    
        // ...
      });
      }
    return (
      <div className="fram">
      <h2>Log In</h2><br/>
  
      
           <button onClick={ongoogole}> <img src={google} alt="" srcset=""/> Log in with Google</button> <br></br>
    
     

    </div>
    );
};

export default Login;