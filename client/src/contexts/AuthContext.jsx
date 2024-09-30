import { createContext, useContext,useState } from "react";

const context  = createContext()

export function ContextProvider({children}) { 
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access-token") ? true : false
    )

    const logIn = (token)=>{
        console.log(token)
        localStorage.setItem("access-token",token);
        setIsAuthenticated(true);
    }

    const logOut = ()=>{
        localStorage.removeItem("access-token");
        setIsAuthenticated(false);
    }

    return(
        <context.Provider value= {{isAuthenticated,logIn,logOut}}>
            {children}
        </context.Provider>
    )
}

export function useAuth(){
    return useContext(context);
}
