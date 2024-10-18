import { createContext, useContext, useState } from "react";

const context = createContext()

export function ContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("access-token") ? true : false
    )

    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);


    const openSignIn = (e) => {
        setShowSignIn(true)
        setShowSignUp(false)
    }

    const openSignUp = (e) => {
        setShowSignUp(true)
        setShowSignIn(false)
    }

    const closeOverlay = (e) => {
        setShowSignIn(false)
        setShowSignUp(false)
    }

    const logIn = (token) => {
        localStorage.setItem("access-token", token);
        setIsAuthenticated(true);
    }

    const logOut = () => {
        localStorage.removeItem("access-token");
        setIsAuthenticated(false);
    }


    return (
        <context.Provider value={{ isAuthenticated, logIn, logOut, openSignIn, openSignUp, closeOverlay,showSignIn,showSignUp }}>
            {children}
        </context.Provider>
    )
}

export function useAuth() {
    return useContext(context);
}
