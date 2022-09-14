import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Countries from './Countries';
import Home from './Home';
import CountryDetails from './CountryDetails';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/countries" element={<Countries></Countries>}>
            <Route path=":c" element={<CountryDetails></CountryDetails>}></Route>
          </Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
          <Route path='/contactus' element={<Contactus></Contactus>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
