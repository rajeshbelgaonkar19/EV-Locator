import React from 'react';
import '../styles/Home.css';
import carImage from '../assets/car1.png';
import WhatsNew from '../components/Whatsnew';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <section className="home">
        <Navbar />
        <div className="mainhome">
          <div className="home-content">
            <h1 className="text-5xl leading-snug -tracking-tighter font-bold mb-4 ">Navigating the digital landscape for success</h1>
            <p className="text-xl tracking-wide leading-loose pb-6 pr-8">Whether you’re planning a long road trip or just need a quick charge in the city, ChargeFinder provides real-time data on the nearest charging points, complete with availability, pricing, and user reviews.</p>
            
            <Link to="/map">
              <button className="home-button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100">Show Maps</button>
            </Link>
            
          </div>
          <div className="home-image">
            <img src={carImage} alt="Electric car charging" />
          </div>
        </div>
        <div className='whatsnew'>
          <WhatsNew />
        </div>
        
        <Footer/>

        </section>
        
      );
}

export default Home;