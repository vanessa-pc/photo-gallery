import React, { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import firebase from 'firebase/compat/app'


export const AuthContext = React.createContext<firebase.User|null>(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC =({ children }) => {

    const [user, setUser] = useState<firebase.User |null>(null);

    useEffect( () => {
        return projectAuth.onAuthStateChanged( (firebaseUser) => {
            setUser(firebaseUser)
        });
    }, [])
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;

}