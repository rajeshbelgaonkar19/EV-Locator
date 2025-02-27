import React from 'react'
import '../styles/EvBenefits.css';
import image from '../assets/image.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import Navbar from '../components/navbar';
import Footer from '../components/footer';



const EvBenefits = () => {
    return (

        <div className='main'>
            <Navbar />
            <br /><br />
            <img src={image} alt="EV Registered" />
            <h2>Transport is a fundamental requirement of modern life, but the traditional combustion engine is quickly becoming outdated. Petrol or diesel vehicles are highly polluting and are being quickly replaced by fully electric vehicles. Fully electric vehicles (EV) have zero tailpipe emissions and are much better for the environment. The electric vehicle revolution is here, and you can be part of it. Will your next vehicle be an electric one?</h2>

            <div className='mainBox'>
                <div className='box'>
                    <img src={image1} alt="EV Registered" className="w-[370px] h-[300px]" />
                    <div className='para'>
                        <h1>Lower Running Costs</h1>
                        <p>The running cost of an electric vehicle is much lower than an equivalent petrol or diesel vehicle. Electric vehicles use electricity to charge their batteries instead of using fossil fuels like petrol or diesel. Electric vehicles are more efficient, and that combined with the electricity cost means that charging an electric vehicle is cheaper than filling petrol or diesel for your travel requirements. Using renewable energy sources can make the use of electric vehicles more eco-friendly. The electricity cost can be reduced further if charging is done with the help of renewable energy sources installed at home, such as solar panels.</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='para'>
                        <h1>Low Maintenance Cost</h1>
                        <p>Electric vehicles have very low maintenance costs because they don’t have as many moving parts as an internal combustion vehicle. The servicing requirements for electric vehicles are lesser than the conventional petrol or diesel vehicles. Therefore, the yearly cost of running an electric vehicle is significantly low.</p>
                    </div>
                    <img src={image2} alt="EV Registered" className="w-[400px] h-[300px]" />
                </div>

                <div className='box'>
                    <img src={image3} alt="EV Registered" className="w-[400px] h-[300px]" />
                    <div className='para'>
                        <h1>Zero Tailpipe Emissions</h1>
                        <p>Driving an electric vehicle can help you reduce your carbon footprint because there will be zero tailpipe emissions. You can reduce the environmental impact of charging your vehicle further by choosing renewable energy options for home electricity.</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='para'>
                        <h1>Tax and Financial Benefits</h1>
                        <p>Registration fees and road tax on purchasing electric vehicles are lesser than petrol or diesel vehicles. There are multiple policies and incentives offered by the government depending on which state you are in. To find out more about electric vehicle incentives, click below .</p>
                    </div>
                    <img src={image4} alt="EV Registered" className="w-[400px] h-[300px]" />
                </div>
            </div>

            <div className='box'>
                <img src={image5} alt="EV Registered" className="w-[400px] h-[300px]" />
                <div className='para'>
                    <h1>Convenience of Charging at Home</h1>
                    <p>Imagine being at a busy fuel station during peak hours, and you are getting late to reach your workplace. These problems can easily be overcome with an electric vehicle. Simply plug your vehicle in at your home charger for 4-5 hours before you plan to go. If you are able to get a charger where you park at home, it is very convenient to plan your journeys in advance. What if you forget to plug in your machine someday? Then you can easily take the help of fast chargers or even battery swapping services if you are on a two-wheeler on the road.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EvBenefits
