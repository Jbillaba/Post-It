import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import {useNavigate} from 'react-router-dom'


const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children}) => {

    let [authTokens, SetAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(localStorage.getItem('authTOkens') ? jwtDecode(localStorage.getItem('authTokens')) : null)

    let contextData = {

    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}