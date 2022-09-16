import logo from './logo.svg';
import './App.css';
import mainstore from './store/store';
import { Provider } from 'react-redux';
import Counter from './Counter';
import Todolist from './Todolist';

function App() {
  return (
    <Provider store={mainstore}>
    <div className="betterview">
      <h1>App Component</h1>
      <Todolist></Todolist>
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
