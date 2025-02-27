import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js
import "../styles/Analytics.css";

const generateRandomData = () => {
  // Generate random busy hour data for real-time updates
  return Array.from({ length: 24 }, () => Math.floor(Math.random() * 100));
};

const StationBusyChart = ({ stationName }) => {
  const [busyHours, setBusyHours] = useState(generateRandomData());

  // Simulate real-time updates every 10 seconds (or use an API for real-time data)
  useEffect(() => {
    const interval = setInterval(() => {
      setBusyHours(generateRandomData());
    }, 60000); // Update data every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'],
    datasets: [
      {
        label: `Busy Hours for ${stationName}`,
        data: busyHours,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time of Day',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Activity Level (busy)',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} width={300} height={150} />
    </div>
  );
};

const EVStationAnalytics = () => {
  const stations = [
    { id: 1, name: "Peak Hours " },
    // { id: 2, name: "Jio-bp pulse Charging Station" },
    // { id: 3, name: "Tata Power Charging Station" },
    // Add more stations...
  ];

  return (
    <div className='box-analytic'>
      {stations.map((station) => (
        <div key={station.id}>
          <h3>{station.name}</h3>
          <StationBusyChart stationName={station.name} />
        </div>
      ))}
    </div>
  );
};

export default EVStationAnalytics;