import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MMSimulate() {
  const navigate = useNavigate();
  const [arrivalDistribution, setArrivalDistribution] = useState('Poisson');
  const [serviceDistribution, setServiceDistribution] = useState('Exponential');

  const handleSubmit = () => {
    console.log(`Navigating to /MM_exp_uni`); // Added console.log for debugging
    navigate('/MMS_with_poisson_exp'); // Navigate when conditions are met
  };

  return (
    <div>
      <h1>M/M/S Simulation</h1>
      <button onClick={handleSubmit}>Start Simulation</button>
    </div>
  );
}

export default MMSimulate;
