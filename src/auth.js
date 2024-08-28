'use client';
import { useEffect, useState, useContext, createContext } from 'react';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { initFirebase } from './services/firebase';

const AuthContext = createContext();


const useAuth = () => {
  const [user, setUser] = useState(null);

  let unsubscribe = null;

  useEffect(() => {
     unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user.displayName) ;
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return  user ;
};

export default useAuth;