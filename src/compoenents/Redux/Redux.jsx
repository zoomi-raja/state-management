import Body from "./Body";
import Header from "./Header";
import { Provider } from 'react-redux';
import store from './store'

export default function Redux(){
    
    return (
        <div className='concepts'>
            <Provider store={store}>
                <Header/>
                <Body/>
            </Provider>
        </div>
    )
}