import './App.css';
import ReactHook from './compoenents/ReactHook/ReactHook';
import Redux from './compoenents/Redux/Redux';
import WithStateDrilling from './compoenents/WithStateDrilling/WithStateDrilling';

function App() {
  return (
    <div className='container'>
      <WithStateDrilling />
      <ReactHook />
      <Redux />
    </div>
  );
}

export default App;
