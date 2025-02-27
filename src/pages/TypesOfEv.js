import React from 'react';
import '../styles/TypesOfEv.css';
import image6 from '../assets/image6.png'
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const TypesOfEV = () => {
    return (
        <div className="main">
            <Navbar />
            <img src={image6} alt="EV Registered" />
            <div className='mainbox'>
                <div className='para'>
                    <h1>Battery Electric Vehicles (BEV)</h1>
                    <p>BEVs are also known as All-Electric Vehicles (AEV). Electric Vehicles using BEV technology run entirely on a battery-powered electric drivetrain. The electricity used to drive the vehicle is stored in a large battery pack which can be charged by plugging into the electricity grid. The charged battery pack then provides power to one or more electric motors to run the electric car. To find out more about BEVs, click below.</p>
                </div>
                <div className='para'>
                    <h1>Hybrid Electric Vehicle (HEV)</h1>
                    <p>HEVs are also known as series hybrid or parallel hybrid. HEVs have both engine and electric motor. The engine gets energy from fuel, and the motor gets electricity from batteries. The transmission is rotated simultaneously by both engine and electric motor. This then drives the wheels. To find out more about HEVs, click below.</p>
                </div>
                <div className='para'>
                    <h1>Plug-in Hybrid Electric Vehicle (PHEV)</h1>
                    <p>The PHEVs are also known as series hybrids. They have both engine and a motor. You can choose among the fuels, conventional fuel (such as petrol) or alternative fuel (such as bio-diesel). It can also be powered by a rechargeable battery pack. The battery can be charged externally. To find out more about PHEVs, click below.</p>
                </div>
                <div className='para'>
                    <h1>Fuel Cell Electric Vehicle(FCEV)</h1>
                    <p>FCEVs are also known as Zero-Emission Vehicles. They employ ‘fuel cell technology’ to generate the electricity required to run the vehicle. The chemical energy of the fuel is converted directly into electric energy. To find out more about FCEVs, click below.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TypesOfEV;
