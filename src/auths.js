'use client';
import {useState, useEffect, useContext, createContext} from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { initFirebase } from "./services/firebase";

const AuthContext= createContext();

export const useAuths = () => useContext(AuthContext);

export const AuthProvider = ({ children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(initFirebase);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;

    }, [auth]);


    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try{
            await signInWithPopup(auth, provider);
        }catch(error) {
            console.error("Error signing in with Google:", error.message);
        }
    }
    const logout = async () => {
        try {
            await signOut(auth);
        }catch(error) {
            console.error("Error signing out:", error.message);
        }
    }
    const value = {
        currentUser,
        loginWithGoogle,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

};