import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performLogin, performLogout } from "./store/actions/authActions";

export default function Body(){
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth.login);
  async function handleClick(){
    setLoading(true);
    try {
      if(login){
        dispatch(performLogout());
      } else {
        await dispatch(performLogin())
      }
    } catch (error) {
      console.error('An error occurred:', error);
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