import { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '@/firebase';
import {
    isSignInWithEmailLink,
    onAuthStateChanged,
    sendSignInLinkToEmail,
    signInWithEmailLink,
    signOut
} from 'firebase/auth';






const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);


    useEffect(() => {
        const storedEmail = window.localStorage.getItem('emailForSignIn');

        if (isSignInWithEmailLink(auth, window.location.href) && storedEmail) {
            signInWithEmailLink(auth, storedEmail, window.location.href).then((result) => {
                window.localStorage.removeItem('emailForSignIn');
                setUser(result.user);
                setAuthLoading(false);
            });
        } else {
            const unsubscribe = onAuthStateChanged(auth, (u) => {
                setUser(u);
                setAuthLoading(false);
        });
            return () => unsubscribe();
        }
    }, []);

    const login = async (email) => {
        const actionCodeSettings = {
            url: window.location.href,
            handleCodeInApp: true,
        };
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', email);
    };

    const logout = () => {
        signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, authLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}