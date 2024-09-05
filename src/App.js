import './App.css';
import ReactHook from './compoenents/ReactHook/ReactHook';
import Redux from './compoenents/Redux/Redux';
import ReduxToolkit from './compoenents/ReduxToolkit/ReduxToolkit';
import WithStateDrilling from './compoenents/WithStateDrilling/WithStateDrilling';

function App() {
  return (
    <div className='container'>
      <WithStateDrilling />
      <ReactHook />
      <Redux />
      <ReduxToolkit />
    </div>
  );
}

export default App;
