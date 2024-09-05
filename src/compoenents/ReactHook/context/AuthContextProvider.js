import { createContext, useReducer } from "react";
import authReducer from "./authReducer";
import { dummyFetch } from "../../../utility/fetch";

export const appContext = createContext({
    login: false,
    performLogin: () => {},
    performLogout: () => {}
});

export default function AuthContextProvider({children}){
    const [authState, authDispatch] = useReducer(authReducer, {
        login: false
    });
    const handleLogin = async () => {
        const result = await dummyFetch();
        if(result.auth){
            authDispatch({
                type: 'PERFORM_LOGIN',
                login: true
            });
        }

    }
    const handleLogout = () => {
        authDispatch({
            type: 'PERFORM_LOGOUT',
            login: false
        });
    }
    return <appContext.Provider value={{
        login:authState.login,
        performLogin: handleLogin,
        performLogout: handleLogout
    }}>
        {children}
    </appContext.Provider>
} ;