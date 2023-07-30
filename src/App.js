import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';
import Detail2 from './components/Detail2';

import Login from './components/Login';

import Detail1 from './components/Detail1';
import Detail3 from './components/Detail3';
import Detail4 from './components/Detail4';
import Detail5 from './components/Detail5';
import Detail6 from './components/Detail6';
import Detail8 from './components/Detail8';
import Detail7 from './components/Detail7';
function App() {
  return (
    <div className="App">
      <Router>
        {/* here we are using router and so, the header stays the same and only the content part changes */}
        <Header />
        {/* anything inside the routes changes as per the URL routing */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path='/detail/id:1' element={<Detail1/>}/>
          <Route path='/detail/id:2' element={<Detail2/>}/>
          <Route path='/detail/id:3' element={<Detail3/>}/>
          <Route path='/detail/id:4' element={<Detail4/>}/>
          <Route path='/detail/id:5' element={<Detail5/>}/>
          <Route path='/detail/id:6' element={<Detail6/>}/>
          <Route path='/detail/id:7' element={<Detail7/>}/>
          <Route path='/detail/id:8' element={<Detail8/>}/>
          
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
