import React,{useState, login} from 'react'
import "./Login.css";
import foto from './download.png'
import { auth } from './firebase';

import {useDispatch} from "react-redux"

function Login() {
     const[email, setEmail]=useState("");
     const[password, setPassword]= useState("");
     const[name, setName]=useState("");
     const[profilePic, setProfilePic]=useState("");
  
     const dispatch = useDispatch();
    
    
     const loginToApp=(e)=>{
        e.preventDefault();
       
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
           
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoUrl
                
            }))
        })
        .catch((error)=> alert(error.message));

    };
   
   
    const register =()=>{
         if(!name){
             return alert("Please enter a full name");
         }
  
  
         auth.createUserWithEmailAndPassword(email,password).
   then((userAuth)=>{
       userAuth.user.updateProfile({
           displayName:name,
           photoUrl:profilePic,

       })
       .then(()=>{
           dispatch(
               login({
               email:userAuth.user.email,
               uid:userAuth.user.uid,
               displayName:name,
               photoUrl:profilePic

           }))
       })
   })
   .catch((error)=> alert(error.message));
    };





    return (
        <div className="login">
         <img src={foto} alt=""/>


         <form>
             <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="Full name" type="text"/>
             <input value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} placeholder="Profile pc Url {optional}" type="text"/>
             <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email"/>
             <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password"/>
             <button onClick={loginToApp}>Sign In</button>

         </form>

         <p>Not a member?
             <span className="login__register" onClick={register}>Register Now</span>
         </p>
        </div>
    )
}

export default Login
