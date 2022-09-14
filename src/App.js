import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function App() {
  var navigate = useNavigate();
  function abc(){
    navigate("/home")
  }
  var makeactive = (a)=>{
    return {
      margin:"1rem 0",
      color:a ? "red" : "",
    };
  }
  return (
    <div className='border m-2 p-2'>
      <NavLink to="/home" style={({isActive})=>makeactive(isActive)}>Home</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/aboutus" style={({isActive})=>makeactive(isActive)}>Aboutus</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/contactus" style={({isActive})=>makeactive(isActive)}>Contactus</NavLink>&nbsp;&nbsp;&nbsp;
      <NavLink to="/countries" style={({isActive})=>makeactive(isActive)}>Countries</NavLink>&nbsp;&nbsp;&nbsp;
      <button onClick={abc}>click here to goto home</button>
      <Outlet></Outlet>
    </div>
  );
}

export default App;