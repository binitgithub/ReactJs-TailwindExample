import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login, Register, Dashboard} from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Dashboard/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register'  element={<Register />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
