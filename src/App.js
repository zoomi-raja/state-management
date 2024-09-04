import './App.css';
import Header from './compoenents/Header';
import Body from './compoenents/Body';
import { useCallback, useState } from 'react';
import { makeAuthApi } from './utility/makeAuthApi';

function App() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClickHandler = useCallback(async() => {
    setLoading(true);
    const result = await  makeAuthApi();
    setLoading(false);
    if(result.auth){
      setLogin(result.auth);
    }
  }, []);
  return (
    <div className='container'>
      <Header login={login}/>
      <Body onClick={onClickHandler} loading={loading}/>
    </div>
  );
}

export default App;
