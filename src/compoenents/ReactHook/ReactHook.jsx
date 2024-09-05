import Body from "./Body";
import AuthContextProvider from "./context/AuthContextProvider";
import Header from "./Header";

export default function ReactHook(){
    
    return (
        <div className='concepts'>
          <AuthContextProvider>
            <Header/>
            <Body/>
          </AuthContextProvider>
        </div>
    )
}