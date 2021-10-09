import firebase from "firebase/compat/app";
import { useContext } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Redirect } from "react-router";
import { projectAuth } from "../firebase/config";
import { AuthContext, AuthProvider } from "./Authorization";
import { deleteUser } from 'firebase/auth'
import { Link } from "react-router-dom";

export default function FirebaseUI(){

    
    const auth = firebase.auth;
    const configUI = {
        signInFlow: 'popup',
        signInOptions: [
            auth.EmailAuthProvider.PROVIDER_ID,
            auth.GoogleAuthProvider.PROVIDER_ID,
            auth.PhoneAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: async (authResult: any) =>{
                const userInfo = authResult.additionalUserInfo;
                if (userInfo.isNewUser && userInfo.providerId === "password"){
                    try {
                        const emailLength = await firebase.auth().fetchSignInMethodsForEmail(userInfo.email)
                        await authResult.user.additionalUserInfo.sendEmailVerification();
                    } catch (error) {
                        await (projectAuth.currentUser && deleteUser(projectAuth.currentUser))
                        alert(`Error: ${error}; could not send email verification.`)                       
                    }
                }
                return false;
            }
        }
    }
    const user =useContext(AuthContext) 
    if (user){
        return <Redirect to="/" />;
    }
    return(
        <>
            <div className="firebaseui">
                Sign in or register using one of the options below: 
            </div>
            <StyledFirebaseAuth uiConfig={configUI as any} firebaseAuth={projectAuth} />
        </>
    )
}