import React, { useState } from "react";
import Analytics from "../components/Analytics";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const EVStationCard = ({ station }) => {
  const handleGetDirections = (address) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, "_blank"); // Open Google Maps in a new tab
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 mb-4">
          {station.name}
        </h3>
        <p className="text-lg text-gray-700 mb-2">Address: {station.address}</p>
        <p className="font-medium text-blue-600 mb-4">Time Slot: {station.timeSlot}</p>
        <p className="text-lg text-green-700 mb-2">Charger Type: {station.chargerType}</p>
      </div>
      <div className="mt-4">
        <button
          className="bg-green-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg shadow-md text-lg "
          onClick={() => handleGetDirections(station.address)}
        >
          Get Directions
        </button>
      </div>
      <div className="mt-6">
        <Analytics />
      </div>
    </div>
  );
};

const EVStationList = () => {
  const stations = [
    { id: 1, name: "Electric Vehicle Charging Station", chargerType:"CCS· 25 kW | LECCS· 1.1 kW", timeSlot: "Open 24 hours", address: "Electric Vehicle Charging Station, WR33+WW7, Navy Nagar, Colaba, Mumbai, Maharashtra 400005", location:"Churchgate" },
    { id: 2, name: "Electric Vehicle Charging Station", chargerType:"LECCS· 1.1 kW" ,timeSlot: "Open 24 hours", address: "Electric Vehicle Charging Station, Backbay Bus Depot, Ganesh Murti Nagar, Colaba, Mumbai, Maharashtra 400005",location:"Churchgate"  },
    { id: 3, name: "Jio-bp pulse Charging Station", chargerType:"Wall socket· 3.3 kW | CCS· 25 kW", timeSlot: "Open 24 hours", address: "Jio-bp pulse Charging Station, Ground Floor, WG Union Rd, Azad Nagar, Colaba, Mumbai, Maharashtra 400005", location:"Churchgate" },
    { id: 4, name: "Jio-bp pulse Charging Station",chargerType:"CHAdeMO .50 kW| LECCS· 1.1 kW | CCS· 25 kW ", timeSlot: "Open 24 hours", address: "Jio-bp pulse Charging Station, No 51, MAKER CHAMBER, 3, Jamnalal Bajaj Marg, Nariman Point, Mumbai, Maharashtra 400021", location:"Churchgate" },
    { id: 5, name: "Jio-bp pulse Charging Station",chargerType:"Type 2", timeSlot: "Open 24 hours", address: "Jio-bp pulse Charging Station, Powerbank Charging Station, 157, Bhanushankar Yagnik Rd, behind Petroleum House, Churchgate, Mumbai, Maharashtra 400020", location:"Churchgate"},
    { id: 6, name: "Powerbank Charging Station", chargerType:"LECCS· 1.1 kW | Type 2" ,timeSlot: "Open 24 hours", address: "Powerbank Charging Station,157, Bhanushankar Yagnik Rd, behind Petroleum House, Backbay Reclamation, Churchgate, Mantralaya, WRGG+XQF Mantralaya, Mumbai, Maharashtra 400020", location:"Churchgate" },
    { id: 7, name: "Jio-bp pulse Charging Station",chargerType:"CCS· 25 kW", timeSlot: "6am – 11pm", address: "Jio-bp pulse Charging Station, XRVF+GGG, Chhatrapati Shivaji Maharaj Sangrahalaya, No 159 to 161, Mahatma Gandhi Road, Kala Ghoda, Mumbai, Maharashtra 400023", location:"Churchgate"},
    { id: 8, name: "Tata Power Charging Station",chargerType:"CHAdeMO .50 kW",  timeSlot: "Open 24 hours", address: "Tata Power Charging Station ,10, Rope Walk Ln, Kala Ghoda, Fort, Mumbai, Maharashtra 400001", location:"Churchgate"},
    { id: 9, name: "Tata Power Charging Station", chargerType:"LECCS· 1.1 kW | Type 2 | CCS· 25 kW " , timeSlot: "Open 24 hours", address: "Tata Power Charging Station,Bombay House, 24, Homi Modi St, Kala Ghoda, Fort, Mumbai, Maharashtra 400001", location:"Churchgate" },
    { id: 10, name: "EV Charging Pump Station",  chargerType:"LECCS· 1.1 kW" ,timeSlot: "Open 24 hours", address: "EV Charging Pump Station,Bombay House, 24, Homi Modi St, Kala Ghoda, Fort, Mumbai, Maharashtra 400001", location:"Churchgate" },
    { id: 11, name: "Electric Vehicle Charging Station", chargerType:"CCS· 25 kW",timeSlot: "Open 24 hours", address: "Electric Vehicle Charging Station,WRMR+FCW, Walchand Hirachand Marg, Ballard Estate, Fort, Mumbai, Maharashtra 400001",location:"Churchgate" },
    { id: 12, name: "Tata Power Charging Station", chargerType:"CHAdeMO .50 kW | Type 2", timeSlot: "Open 24 hours", address: "Tata Power Charging Station, WRWQ+582, Chhatrapati Shivaji Maharaj Terminus, Chhatrapati Shivaji Maharaj Terminus, Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001", location:"Churchgate" },
    { id: 13, name: "EV Charging Station", chargerType:"Type 2 | CCS· 25 kW",timeSlot: "10am – 11:30pm", address: "EV Charging Station,157,108/110, Cavel Street, Kalbadevi, Mumbai, Maharashtra 400002", location:"Marine Lines" },
    { id: 14, name: "Ather Grid Charging Station", chargerType:"LECCS· 1.1 kW" , timeSlot: "Open 24 hours", address: "Ather Grid Charging Station, Apple Steels, 39/37A, Plot no 37/39, Carpenter 2nd Street, Cawasji Patel Tank, Girgaon, Mumbai, 400004", location:"Marine Lines"},
    { id: 15, name: "Tata Charging Station",chargerType:"Type 2", timeSlot: "Open 24 hours", address: "Tata Charging Station,Mukesh Chowk (Umar Park, Tata Garden, Breach Candy, Cumballa Hill, Mumbai, Maharashtra 400026", location:"Grant Road" },
    { id: 16, name: "Jio-bp pulse Charging Station",chargerType:"CCS· 25 kW", timeSlot: "Open 24 hours", address: "Jio-bp pulse Charging Station,Bane Compound, Tardeo, Mumbai, Maharashtra 400034", location:"Mumbai Central" },
    { id: 17, name: "Jio-bp pulse Charging Station", chargerType:"LECCS· 1.1 kW" , timeSlot: "Open 24 hours", address: "Jio-bp pulse Charging Station, Ground Floor, RS Nimkar Marg, opposite Gita Bhawan, Navjeevan Society, Grant Road East, Dalal Estate, Kamathipura, Mumbai, Maharashtra 400007", location:"Mumbai Central" },
    { id: 18, name: "Tata Power Charging Station",chargerType:"CCS· 25 kW", timeSlot: "Open 24 hours", address: "Tata Power Charging Station,XR9C+F57, Opp, Mumbai Central, Lamington Rd, Marzban Parsi Colony, Dalal Estate, Kamathipura, Mumbai, Maharashtra 400008", location:"Mumbai Central" },
    { id: 19, name: "GOEC Charging Station",chargerType:"CHAdeMO .50 kW",  timeSlot: "Open 24 hours", address: "GOEC Charging Station,XRH7+779, Dr Amedkar Rd, Haji Ali, Arya Nagar, Tulsiwadi, Mahalakshmi, Mumbai, Maharashtra 400034", location:"Mahalakshmi" },
    { id: 20, name: "Tata Power Charging Station",chargerType:"CCS· 25 kW", timeSlot: "Open 24 hours", address: "Tata Power Charging Station,XRH7+779, 25A, Sane Guruji Marg, RTO Colony, Mumbai Central, Mumbai, Maharashtra 400011", location:"Mahalakshmi" },
    { id: 21, name: "Charge Zone Charging Station",chargerType:"Type 2", timeSlot: "Open 24 hours", address: "Charge Zone Charging Station ,NSCI New Sports Annex, Lala Lajpatrai Marg, Lotus Colony, Worli, Mumbai, Maharashtra 400018", location:"Mahalakshmi" },
    { id: 22, name: "Jio-bp pulse Charging Station", chargerType:"LECCS· 1.1 kW | Type 2" , timeSlot: "Open 24 hours", address: "Jio-bp pulse Charging Station,Ground Floor, Bus Stand, near NSCI Building, Lotus Colony, Worli, Mumbai, Maharashtra 400018", location:"Mahalakshmi" },
    { id: 22, name: "Electric Vehicle Charging Station",chargerType:"CCS· 25 kW", timeSlot: "Open 24 hours", address: "Electric Vehicle Charging Station,91A, Reay Road, Ghodapdeo, Mumbai, Maharashtra 400033", location:"Lower Parel" },
    { id: 23, name: "Ather Grid Charging Station",chargerType:"CHAdeMO .50 kW | Type 2",  timeSlot: "10am–9 pm", address: "Ather Grid Charging Station,MCGM Parking || Lodha Venezia CPL, GD Ambekar Marg, Lal Baug, Parel, Mumbai, Maharashtra 400033", location:"Lower Parel" },

  ];

  const [location, setLocation] = useState("");
  const [filteredStations, setFilteredStations] = useState(stations);

  const handleSearch = (e) => {
    e.preventDefault();
    const nearbyStations = stations.filter((station) =>
      station.address.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredStations(nearbyStations);
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen pb-20 pt-28 bg-gradient-to-b from-lime-100 to-emerald-100">
      <h2 className="text-4xl font-bold font-serif text-center mb-10 text-emerald-800 tracking-widest">Find EV Charging Stations</h2>
      <form onSubmit={handleSearch} className="flex justify-center items-center mb-10">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className=" focus:outline-none focus:ring-1 focus:ring-green-400  shadow-lime-400 shadow-md p-3 rounded-lg text-lg mr-4 w-full max-w-4xl" 
          required
        />
        <button type="submit" className="bg-green-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg shadow-lime-400 shadow-md text-lg">
          Search Stations
        </button>
      </form>

      {filteredStations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {filteredStations.map((station) => (
            <EVStationCard key={station.id} station={station} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">No stations found in the specified location.</p>
      )}
      </div>
      <Footer/>

    </div>
  );
};

export default EVStationList;
