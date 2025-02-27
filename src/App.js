// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './pages/Home';
import ShowMap from './components/ShowMap';
import ChargingCalculator from './pages/ChargingCalculator';
import TypesOfEV from './pages/TypesOfEv';
import EvBenefits from './pages/EvBenefits';
import BookMechanic from './pages/BookMechanic';
import ShowMaps from './pages/ShowMaps';


function App() {
  return (
    <Router>
      <div className="max-w-screen mx-auto ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<ShowMap />} />
        <Route path="/On-map" element={<ShowMaps />} />
        <Route path="/types-of-ev" element={<TypesOfEV/>} />
        <Route path="/benefits-of-ev" element={<EvBenefits/>} />
        <Route path="/Public_Charging_Calculator" element={<ChargingCalculator />} />
        <Route path="/book-mechanic" element={<BookMechanic/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
