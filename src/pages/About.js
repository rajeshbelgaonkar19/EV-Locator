import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Select } from '@/components/ui/select';

const EVCostCalculator = () => {
  const [formData, setFormData] = useState({
    vehicleSegment: '',
    batteryCapacity: '',
    evRange: '',
    homeChargePercent: '',
    publicChargePercent: '',
    journeyDistance: '',
    journeyFrequency: '',
    annualDistance: '',
    state: '',
    domesticTariff: '',
    publicChargingCost: '',
    comparingVehicle: '',
    conventionalMileage: ''
  });

  const [results, setResults] = useState(null);

  const vehicleSegments = [
    { value: 'compact', label: 'Compact' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'luxury', label: 'Luxury' }
  ];

  const frequencies = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const states = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateCosts = () => {
    // Validate inputs
    if (!formData.batteryCapacity || !formData.homeChargePercent || 
        !formData.publicChargePercent || !formData.annualDistance) {
      alert('Please fill in all required fields');
      return;
    }

    // Calculate home charging cost
    const homeChargingCost = (
      (formData.batteryCapacity * (formData.homeChargePercent / 100) * 
       formData.domesticTariff * (formData.annualDistance / formData.evRange))
    );

    // Calculate public charging cost
    const publicChargingCost = (
      (formData.batteryCapacity * (formData.publicChargePercent / 100) * 
       formData.publicChargingCost * (formData.annualDistance / formData.evRange))
    );

    // Calculate conventional fuel cost
    const conventionalFuelCost = (
      (formData.annualDistance / formData.conventionalMileage) * 100 // Assuming ₹100/L fuel cost
    );

    setResults({
      totalEVCost: homeChargingCost + publicChargingCost,
      conventionalCost: conventionalFuelCost,
      savings: conventionalFuelCost - (homeChargingCost + publicChargingCost)
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardHeader className="bg-green-600">
        <CardTitle className="text-2xl font-bold text-white text-center">
          Should I shift to electric vehicle?
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Vehicle Segment
              </label>
              <select
                name="vehicleSegment"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select</option>
                {vehicleSegments.map(segment => (
                  <option key={segment.value} value={segment.value}>
                    {segment.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Battery Capacity (kWh)
              </label>
              <input
                type="number"
                name="batteryCapacity"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                EV Range (km)
              </label>
              <input
                type="number"
                name="evRange"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Home Charging (%)
              </label>
              <input
                type="number"
                name="homeChargePercent"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Public Charging (%)
              </label>
              <input
                type="number"
                name="publicChargePercent"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Annual Distance (km)
              </label>
              <input
                type="number"
                name="annualDistance"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <select
                name="state"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select</option>
                {states.map(state => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Domestic Tariff (₹/kWh)
              </label>
              <input
                type="number"
                name="domesticTariff"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Public Charging Cost (₹/kWh)
              </label>
              <input
                type="number"
                name="publicChargingCost"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Conventional Vehicle Mileage (km/L)
              </label>
              <input
                type="number"
                name="conventionalMileage"
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md border-green-300 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={calculateCosts}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-200"
          >
            Calculate Total Cost
          </button>
        </div>

        {results && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded-md shadow">
                <p className="text-sm text-gray-600">Total EV Cost (Annual)</p>
                <p className="text-xl font-bold text-green-600">
                  ₹{Math.round(results.totalEVCost).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-white rounded-md shadow">
                <p className="text-sm text-gray-600">Conventional Cost (Annual)</p>
                <p className="text-xl font-bold text-green-600">
                  ₹{Math.round(results.conventionalCost).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-white rounded-md shadow">
                <p className="text-sm text-gray-600">Potential Savings</p>
                <p className="text-xl font-bold text-green-600">
                  ₹{Math.round(results.savings).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EVCostCalculator;