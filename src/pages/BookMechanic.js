import React, { useState } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

// Dummy mechanic data
const mechanics = [
  { id: 1, name: "John Doe", distance: "2 km", specialty: "Battery Repair", location: "Parel", phone: "+1234567890" },
  { id: 2, name: "Jane Smith", distance: "5 km", specialty: "Software Update", location: "Dadar", phone: "+0987654321" },
  { id: 3, name: "Will Smith", distance: "5 km", specialty: "Software Update", location: "Chembur", phone: "+0987654321" },
  { id: 4, name: "Eren Smith", distance: "5 km", specialty: "Software Update", location: "Dadar", phone: "+0987654321" },
  { id: 5, name: "Rose Smith", distance: "5 km", specialty: "Software Update", location: "Parel", phone: "+0987654321" },
  { id: 6, name: "Bob Johnson", distance: "3 km", specialty: "Tire Change", location: "Chembur", phone: "+1122334455" },
];

const BookMechanic = () => {
  const [location, setLocation] = useState("");
  const [filteredMechanics, setFilteredMechanics] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [problem, setProblem] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const nearbyMechanics = mechanics.filter((mechanic) =>
      mechanic.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredMechanics(nearbyMechanics);
  };

  const handleBookNow = (mechanic) => {
    setSelectedMechanic(mechanic);
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
    setUserName("");
    setProblem("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center bg-green-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold font-serif tracking-widest mb-10 text-center text-emerald-800 ">Book an Electric Vehicle Mechanic</h2>
        <form onSubmit={handleSearch} className="flex items-center justify-center space-x-4 mb-6 w-full">
          <input
            type="text"
            placeholder="Enter the location where you want the mechanic to come"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 w-full max-w-3xl border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
            required
          />
          <button type="submit" className="bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 text-lg">
            Find Mechanics
          </button>
        </form>

        {filteredMechanics.length > 0 && (
          <div className="flex overflow-x-auto space-x-4 py-4">
            {filteredMechanics.map((mechanic) => (
              <div key={mechanic.id} className="flex-shrink-0 w-72 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold">{mechanic.name}</h4>
                <p>Distance: {mechanic.distance}</p>
                <p>Specialty: {mechanic.specialty}</p>
                <button 
                  className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-blue-600" 
                  onClick={() => handleBookNow(mechanic)}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Booking Mechanic: {selectedMechanic.name}</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Your Name:</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Problem Description (optional):</label>
                  <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Describe the issue with your EV"
                    className="p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <p>
                  Call {selectedMechanic.name} at:{" "}
                  <a href={`tel:${selectedMechanic.phone}`} className="text-green-600 font-bold">
                    {selectedMechanic.phone}
                  </a>
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BookMechanic;
