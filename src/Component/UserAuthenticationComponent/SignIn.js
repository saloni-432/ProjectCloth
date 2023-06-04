import React, { useState } from 'react'
import Button from '../buttonComponenet/button';
import FormComp from '../Form/FormComp';
import { auth, SignUpWithGoogle} from '../firebase/firebase.utils.js'


function SignIn() {
    const [UserDetails, setUserDetails] = useState({
        Email:'',
        Password:'',
    })
    const handlesign=async ()=>{
        try {
            if(auth.currentUser){
            alert("User Already Signed IN");
            return;
            }
            await SignUpWithGoogle();
            window.location="/";
        } catch (error) {
            console.error();
            alert("Invalid Email and Password");
            setUserDetails({
                Email:'',
            Password:'',
            })
        }
    }
    const handleSignINEmailandPass=async (e)=>{
        e.preventDefault();
        if(auth.currentUser){
            alert("User Already Signed IN");
            return;
        }
        try {
            const {Email,Password}=UserDetails;
            
            await auth.signInWithEmailAndPassword(Email,Password);
            window.location="/";
            setUserDetails({
                Email:'',
            Password:'',
            })
        } catch (error) {
            console.error();
            alert("Invalid Email and Password");
        }
    }
    const handleClick=(e)=>{
        const {name,value}=e.target;
        console.log(name);
        console.log(value);
        setUserDetails({ ...UserDetails,[name]:value,});
        console.log(UserDetails);


    }
    return (
        <div className="SignIn">

            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSignINEmailandPass}>
                <FormComp name="Email" type="email" value={UserDetails.Email} required handleChange={handleClick} label="Email"/>
                <FormComp name="Password" type="password" value={UserDetails.Password} required handleChange={handleClick} label="Password"/>
                <Button type="submit">SIGN-IN</Button>
                <Button style={{backgroundColor:"rgb(66,133,244)"}} onClick={handlesign}>SIGN-IN WITH GOOGLE</Button>
            </form>
            
        </div>
    )
}

export default SignIn;
