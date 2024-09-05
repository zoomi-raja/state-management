import { useSelector } from "react-redux";

export default function Header(){
    const login = useSelector(state => state.auth.login);
    
    return <header className="header">
        <p>[ <span>Redux</span> ] Click on { !login ? 'Login' : 'Logout'} Button to change State</p>
    </header>
}