import { useCallback, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import { makeAuthApi } from "../../utility/makeAuthApi";

export default function WithStateDrilling(){
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
        <div className='concepts'>
          <Header login={login}/>
          <Body onClick={onClickHandler} loading={loading}/>
        </div>
    )
}