import { createContext, useReducer } from "react";
import authReducer from "./authReducer";
import { loginAction, logoutAction } from "./AuthActions";

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
        //used thunk logic to refactor
        await loginAction(authDispatch);

    }
    const handleLogout = () => {
        logoutAction(authDispatch)
    }
    return <appContext.Provider value={{
        login:authState.login,
        performLogin: handleLogin,
        performLogout: handleLogout
    }}>
        {children}
    </appContext.Provider>
} ;