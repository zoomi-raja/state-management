import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/authSlice";
import { performLoginThunk } from "./store/actions/authActions";

export default function Body(){
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const login = useSelector(state => state.auth2.login);
  async function handleClick(){
    setLoading(true);
    try {
      if(login){
        dispatch(authActions.performLogout());
      } else {
        await dispatch(performLoginThunk());
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