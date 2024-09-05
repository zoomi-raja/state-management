import { useContext, useState } from "react";
import { appContext } from "./context/AuthContextProvider";

export default function Body(){
  const [loading, setLoading] = useState(false);
  const { login, performLogin, performLogout } = useContext(appContext);
  async function handleClick(){
    setLoading(true);
    try {
      if(login){
        performLogout();
      } else {
        await performLogin();
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Optionally, you could set some error state here
    } finally {
      setLoading(false);
    }
  }

    return <section className='main-section'>
    <button className='btn' onClick={handleClick} disabled={loading}>
      {loading ? 'Loading ..!' : login ? 'Logout !' : 'Login !'}
      </button>
    </section>
}