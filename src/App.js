import logo from './logo.svg';
import './App.css';
import mainstore from './store/store';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import products from './store/products';

function App() {
  return (
    <Provider store={mainstore}>
    <div>
      <Header></Header>
      <Outlet></Outlet>
      
      
    </div>
    </Provider>
  );
}

export default App;
