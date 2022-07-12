import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alpha from './pages/Alpha';
import Model from './pages/Model';
import Position_and_Risk from './pages/Position_and_Risk';
import Reporting from './pages/Reporting';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/alpha' exact element={<Alpha/>} />
          <Route path='/model' element={<Model/>} />
          <Route path='/position_and_risk' element={<Position_and_Risk/>} />
          <Route path='/reporting' element={<Reporting/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
