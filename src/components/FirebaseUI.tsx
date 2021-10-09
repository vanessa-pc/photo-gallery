import firebase from "firebase/compat/app";
import { useContext } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Redirect } from "react-router";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "./Authorization";
import { deleteUser } from 'firebase/auth'
import { motion } from "framer-motion";
import swal from "sweetalert";

export default function FirebaseUI():JSX.Element{

    
    const auth = firebase.auth;
    const configUI = {
        signInFlow: 'popup',
        signInOptions: [
            auth.EmailAuthProvider.PROVIDER_ID,
            auth.GoogleAuthProvider.PROVIDER_ID,
            auth.PhoneAuthProvider.PROVIDER_ID,
            auth.FacebookAuthProvider.PROVIDER_ID,
            auth.TwitterAuthProvider.PROVIDER_ID,
            auth.GithubAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: async (authResult: any) =>{
                const userInfo = authResult.additionalUserInfo;
                if (userInfo.isNewUser && userInfo.providerId === "password"){
                    try {
                        await authResult.user.sendEmailVerification();
                        swal("Email verification sent!", "Thanks for registering!", "info")
                    } catch (error) {
                        await (projectAuth.currentUser && deleteUser(projectAuth.currentUser))
                        swal(`Error: ${error}; could not send email verification.`, "Please enter a valid email", "error")                       
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

           <div className="front-singin">
           <motion.h1  
           className="front-title"          
           initial={{x: "-200vh"}}
           animate={{x: 0}}> 
               Shutter Up!     
            </motion.h1>
           <motion.div
           initial={{opacity:0}}
           animate={{opacity:0.8}}
           transition={{delay: 1}}
           ><p className="front-welcome">Sign in or register using one of the options below: </p></motion.div>
            <motion.div className="signin-options"
            initial={{opacity:0}}
            animate={{opacity:0.8}}
            transition={{delay: 1}}
            >
            <StyledFirebaseAuth className="options-text" uiConfig={configUI as any} firebaseAuth={projectAuth} />
            </motion.div>
           </div>
        </>
    )
}