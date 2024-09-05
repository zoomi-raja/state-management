import { useState } from "react";

export default function Body({onClick, login}){
  const [loading, setLoading] = useState(false);
  async function handleClick(){
    setLoading(true);
    try {
      await onClick();
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