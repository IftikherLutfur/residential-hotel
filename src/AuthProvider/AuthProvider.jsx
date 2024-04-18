import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config'
import { GithubAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const google = new GoogleAuthProvider();
    const gitHub = new GithubAuthProvider();
    

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleUer = () => {
        return signInWithPopup(auth, google)
    }

    const gitHubLogin = () => {
        return signInWithPopup (auth, gitHub)
    }

    const createUser = (name, email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name)
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User logged in", currentUser)
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleUer,
        gitHubLogin,
        updateUserProfile
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;