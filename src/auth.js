'use client';
import { useEffect, useState } from 'react';
import { auth } from './services/firebase';
import { onAuthStateChanged } from 'firebase/auth';


const useAuth = () => {
  const [user, setUser] = useState(null);

  let unsubscribe = null;

  useEffect(() => {
     unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return  user ;
};

export default useAuth;