import {Navigate} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"


function ProtectedRoute({children}) {
    const auth = useAuth()
    if(auth.isAuthenticated)
        return <>{children}</>
    else
        return <Navigate to="/"/>
}

export default ProtectedRoute