export default function Body({onClick, loading}){
    return <section className='main-section'>
      <button className='btn' onClick={onClick} disabled={loading}>
        {loading? 'Loading ..!' : 'Login !'}
      </button>
    </section>
}