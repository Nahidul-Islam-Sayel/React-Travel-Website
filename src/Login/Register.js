import React from 'react';
import { Form , Row , Col , Button } from 'react-bootstrap';
import'./Register.css'
import { TextField } from '@mui/material';
import facebook from '../Data/Icon/fb.png'
import google from '../Data/Icon/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getAuth,  FacebookAuthProvider , createUserWithEmailAndPassword , signInWithPopup , getRedirectResult, GoogleAuthProvider} from "firebase/auth";
import firebaseConfig from './firebaseconfig'
import { initializeApp } from 'firebase/app';
import { userContext } from '../App';
import { useContext } from 'react';
const provider = new GoogleAuthProvider();
const providerr = new FacebookAuthProvider();
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const Login = () => {
    const emaill = document.getElementById("emails");
    const passwordd = document.getElementById("passwords");
    const passwordcff= document.getElementById("passwordsr");
    let email="",password="",passwordcf="";
    const[user , loginUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
 
   if((emaill&&passwordd)){
       email=emaill.value;
       password=passwordd.value;
   }

 
  const onsubmit=()=>{
    const auth = getAuth();
   console.log(email, password);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
   const{email}=userCredential;
   const signedInUser = {name: "", email: email} 
       loginUser(signedInUser);
      
       history.replace(from);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
  }  
  const ongoogole=()=>{
    
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
     
      const {displayName, email} = result.user;
      const signedInUser = {name: displayName, email} 
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
          <h2>Sing Up</h2><br/>
           <TextField id="standard-basic" label="Name" variant="standard" /><br/>
           <TextField id="standard-basic" id="emails" type="email" label="Email" variant="standard" /><br/>
           <TextField id="standard-basic" id="passwords" type="password" label="password" variant="standard" /><br/>
          
           <Button onClick={onsubmit}>Submit</Button><br/>
           <p>I have alrady Account <Link to="/login">Login</Link></p>
            <h6>or</h6>
      
           <button onClick={ongoogole}> <img src={google} alt="" srcset=""/> Log in with Google</button> <br></br>
        
         

        </div>
    );
};

export default Login;