import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';  // Ensure the path to your logo image is correct
import '../styles/Navbar.css';  // Import your CSS file


const Navbar = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
 
  
  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  

  return (
    <nav className="navbar">
      {/* Left Section - Logo and ChargeFinder */}
      <div className="navbar-left">
        <Link to="/home" className="navbar-logo-link">
          <img 
            src={logo} 
            alt="Logo" 
            className="navbar-logo"
          />
          <span className="navbar-title font-serif tracking-widest">ChargeFinder</span>
        </Link>
      </div>

      {/* Right Section - Navigation Links */}
      <div className="navbar-right">
     
           
      <div className="navbar-link services-dropdown">
          <span className="navbar-link  fas fa-icon-class text-green-500 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1" onClick={toggleDropdown}>
            Going Electric ▼
          </span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/types-of-ev" className="dropdown-item">Types of EV</Link>
              <Link to="/benefits-of-ev" className="dropdown-item">Benefits of EV</Link>
            </div>
          )}
      </div>
          

        {/* <Link to="/about" className="navbar-link">About</Link> */}

        {/* Dropdown for Services */}
        <div className="navbar-link services-dropdown">
          <span className="navbar-link  fas fa-icon-class text-green-500 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1" onClick={toggleDropdown}>
            Services ▼
          </span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/On-map" className="dropdown-item">
              Show Map  
              </Link>
              <Link to="/book-mechanic" className="dropdown-item">
              Book a Mechanic
              </Link>
            </div>
          )}
        </div>


        <div className="navbar-link services-dropdown">
          <span className="navbar-link  fas fa-icon-class text-green-500 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1" onClick={toggleDropdown}>
            Tools ▼
          </span>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/Public_Charging_Calculator" className="dropdown-item">
              Public Charging Calculator  
              </Link>
              <Link to="/book-mechanic" className="dropdown-item">
              
              </Link>
            </div>
          )}
        </div>
        {/* <Link to="/contact" className="navbar-link">Contact Us</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;