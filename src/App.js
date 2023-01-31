import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login  from './components/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='detail' element = { <Detail/> }/>
          <Route path='/' element = { <Home/> }/>
          <Route path='/login' element = { <Login/> }/>
        </Routes>
        
      </BrowserRouter>
        
    </div>
  );
}

export default App;
