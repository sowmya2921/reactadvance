import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function App() {
  var navigate = useNavigate();
  function abc(){
    navigate("/home")
  }
  
  return (
    <div className='border m-2 p-2'>
      <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
      <button onClick={abc}>click here to goto home</button>
      <Outlet></Outlet>
    </div>
  );
}

export default App;