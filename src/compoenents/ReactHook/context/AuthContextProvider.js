import { createContext } from "react";

export const appContext = createContext({
    login: false,
    doAuth: () => {}
});

export default function AuthContextProvider({children}){
    return <appContext.Provider value={{
        login:false,
        doAuth: () => {}
    }}>
        {children}
    </appContext.Provider>
} ;