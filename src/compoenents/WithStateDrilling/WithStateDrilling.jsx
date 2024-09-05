import { useCallback, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import { dummyFetch } from "../../utility/fetch";

export default function WithStateDrilling(){
  const [login, setLogin] = useState(false);
  const onClickHandler = useCallback(async() => {
    const result = await dummyFetch();
    if(result.auth){
      setLogin((state) => !state);
    }
  }, []);
    return (
        <div className='concepts'>
          <Header login={login}/>
          <Body onClick={onClickHandler} login={login}/>
        </div>
    )
}