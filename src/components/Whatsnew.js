import React, { useState, useEffect } from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const WhatsNew = () => {
  // Initialize states for the counters
  const [evRegistered, setEvRegistered] = useState(0);
  const [statePolicies, setStatePolicies] = useState(0);
  const [manufacturers, setManufacturers] = useState(0);
  const [chargingStations, setChargingStations] = useState(0);

  // Effect to simulate counter increment
  useEffect(() => {
    const interval = setInterval(() => {
      setEvRegistered((prev) => (prev < 759182 ? prev + 19000 : 759182));
      setStatePolicies((prev) => (prev < 25 ? prev + 1 : 25));
      setManufacturers((prev) => (prev < 380 ? prev + 20 : 380));
      setChargingStations((prev) => (prev < 1800 ? prev + 100 : 1800));
    }, 100);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="whats-new">
      <h2 className="text-3xl font-bold mb-4">E-Mobility at a Glance</h2>
      <p className="text-lg text-gray-700 mb-8">
        India stands at the cusp of a ground-breaking revolution in Electric
        Mobility
      </p>
      <div className="whats-new-cards flex justify-between flex-wrap">
        <div className="card flex flex-col items-center p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <img src={icon1} alt="EV Registered" className="w-[80px] h-[80px]" />
          </div>
          {/* Update text size to text-5xl and color to yellow-green */}
          <h3 className="text-6xl font-bold text-green-700">
            {evRegistered.toLocaleString()}
          </h3>
          <p className="text-sm text-gray-600">
            Electric Vehicles have been registered till today
          </p>
        </div>

        <div className="card flex flex-col items-center p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <img src={icon2} alt="State Policies" className="w-[80px] h-[80px]" />
          </div>
          <h3 className="text-6xl font-bold text-green-700">
            {statePolicies}+
          </h3>
          <p className="text-sm text-gray-600">
            States have notified or drafted state Electric Vehicle policies
          </p>
        </div>

        <div className="card flex flex-col items-center p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <img src={icon3} alt="Manufacturers" className="w-[80px] h-[80px]" />
          </div>
          <h3 className="text-6xl font-bold text-green-700">{manufacturers}</h3>
          <p className="text-sm text-gray-600">
            Electric Vehicle manufacturers operate in India
          </p>
        </div>

        <div className="card flex flex-col items-center p-5 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center items-center mb-4">
            <img src={icon4} alt="Charging Stations" className="w-[80px] h-[80px]" />
          </div>
          <h3 className="text-6xl font-bold  text-green-700">
            {chargingStations}
          </h3>
          <p className="text-sm text-gray-600">
            Electric Vehicle Charging Stations have already been installed
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
