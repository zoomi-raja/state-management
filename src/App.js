import { Provider } from 'react-redux';
import './App.css';
import ReactHook from './compoenents/ReactHook/ReactHook';
import Redux from './compoenents/Redux/Redux';
import WithStateDrilling from './compoenents/WithStateDrilling/WithStateDrilling';
import store from './compoenents/Redux/store';

function App() {
  return (
    <div className='container'>
      <Provider store={store}>
        <WithStateDrilling />
        <ReactHook />
        <Redux />
      </Provider>
    </div>
  );
}

export default App;
