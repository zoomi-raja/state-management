import { useContext } from "react"
import { appContext } from "./context/AuthContextProvider";

export default function Header(){
    const {login, doAuth } = useContext(appContext);
    
    return <header className="header">
        <p>[ <span>State drilling</span> ] Click on { !login ? 'Login' : 'Logout'} Button to change State</p>
    </header>
}