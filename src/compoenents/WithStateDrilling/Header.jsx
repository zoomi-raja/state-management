export default function Header({ login = false }){
    return <header className="header">
        <p>[ <span>State drilling</span> ] Click on { !login ? 'Login' : 'Logout'} Button to change State</p>
    </header>
}