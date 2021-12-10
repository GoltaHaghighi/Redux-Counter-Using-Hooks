import './App.css';
import Counter from './components/Counter';
import Number from './components/Number';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Increase and Decrease using hooks
        <Counter />
        <hr />
        <hr />
        Power of 2 and square root
        <Number />
        
      </div> 
    </Provider>  
  );
}

export default App;
