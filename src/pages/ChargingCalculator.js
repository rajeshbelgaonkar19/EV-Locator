import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ChargingCalculator = () => {
  const [vehicleSegment, setVehicleSegment] = useState('2w');
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [costPerKWh, setCostPerKWh] = useState('');
  const [startBattery, setStartBattery] = useState('');
  const [endBattery, setEndBattery] = useState('');
  const [chargerType, setChargerType] = useState('slow');
  const [chargingTime, setChargingTime] = useState(null);
  const [chargingCost, setChargingCost] = useState(null);
  const [error, setError] = useState(null);

  const calculateCharging = () => {
    if (!batteryCapacity || !costPerKWh || !startBattery || !endBattery) {
      setError('Please fill in all required fields.');
      return;
    }

    setError(null);

    let time;
    if (chargerType === 'slow') time = 5;
    else if (chargerType === 'fast') time = 2;
    else if (chargerType === 'rapid') time = 1;

    const energyUsed = (batteryCapacity * (endBattery - startBattery)) / 100;
    const totalCost = energyUsed * costPerKWh;

    setChargingTime(time);
    setChargingCost(totalCost.toFixed(2));
  };

  const InputField = ({ label, type, value, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  const SelectField = ({ label, value, onChange, options }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 ease-in-out"
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-50">
      <Navbar />
      <div className="container mx-auto py-9 ">
        <div className="bg-white mt-20 rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-green-600 px-8 py-4 text-white">
            <h1 className="text-2xl font-bold">Public Charging Calculator</h1>
            <p className="text-green-100 text-sm">Calculate your EV charging time and costs instantly</p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Input Form */}
            <div className="lg:w-2/3 p-6 border-r border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <SelectField
                    label="Vehicle Segment"
                    value={vehicleSegment}
                    onChange={(e) => setVehicleSegment(e.target.value)}
                    options={[
                      { value: '2w', label: '2W (Two-Wheeler)' },
                      { value: '3w', label: '3W (Three-Wheeler)' },
                      { value: '4w', label: '4W (Four-Wheeler)' }
                    ]}
                  />
                </div>

                <InputField
                  label="Battery Capacity (kWh)"
                  type="number"
                  value={batteryCapacity}
                  onChange={(e) => setBatteryCapacity(e.target.value)}
                  placeholder="Enter capacity"
                />

                <InputField
                  label="Range (km)"
                  type="number"
                  placeholder="Enter range"
                />

                <SelectField
                  label="Charger Type"
                  value={chargerType}
                  onChange={(e) => setChargerType(e.target.value)}
                  options={[
                    { value: 'slow', label: 'Slow Charging' },
                    { value: 'fast', label: 'Fast Charging' },
                    { value: 'rapid', label: 'Rapid Charging' }
                  ]}
                />

                <InputField
                  label="Cost per kWh (₹)"
                  type="number"
                  value={costPerKWh}
                  onChange={(e) => setCostPerKWh(e.target.value)}
                  placeholder="Enter cost"
                />

                <InputField
                  label="Battery Level at Start (%)"
                  type="number"
                  value={startBattery}
                  onChange={(e) => setStartBattery(e.target.value)}
                  placeholder="Enter start level"
                />

                <InputField
                  label="Battery Level at End (%)"
                  type="number"
                  value={endBattery}
                  onChange={(e) => setEndBattery(e.target.value)}
                  placeholder="Enter end level"
                />

                <InputField
                  label="Distance to Travel (km)"
                  type="number"
                  placeholder="Enter distance"
                />
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={calculateCharging}
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-200"
              >
                Calculate Total Cost
              </button>
            </div>

            {/* Right Column - Results */}
            <div className="lg:w-1/3 p-6 bg-gray-50">
              <div className="sticky top-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Charging Summary</h2>
                
                {chargingTime && chargingCost ? (
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Estimated Charging Time</p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-green-600">{chargingTime}</span>
                        <span className="ml-2 text-gray-600">hours</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <p className="text-sm text-gray-600 mb-1">Total Charging Cost</p>
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-green-600">₹ {chargingCost}</span>
                      </div>
                    </div>

                    <div className="bg-green-100 rounded-lg p-4 border border-green-200">
                      <p className="text-sm text-green-800">
                        These calculations are estimates based on your inputs and may vary depending on actual charging conditions.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <p className="text-gray-600">Enter your charging details and click calculate to see the estimated time and cost.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChargingCalculator;