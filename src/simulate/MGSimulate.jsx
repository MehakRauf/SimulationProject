import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MGSimulate() {
  const navigate = useNavigate();
  const [arrivalDistribution, setArrivalDistribution] = useState('Poisson');
  const [serviceDistribution, setServiceDistribution] = useState('Normal');

  const handleSubmit = () => {
    console.log(`Navigating to /MG_exp_uni`); // Added console.log for debugging

    if (serviceDistribution === 'Uniform') {
      navigate('/MG_Exp_uni'); // Navigate when conditions are met
    } 
    if (serviceDistribution === 'Normal') {
      navigate('/MG_Exp_norm'); // Navigate when conditions are met
    } 
    
  };

  return (
    <div>
      <h1>M/G/S Simulation</h1>
      <div>
        <label>Service Distribution: </label>
        <select 
          value={serviceDistribution} 
          onChange={(e) => setServiceDistribution(e.target.value)}
        >
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Start Simulation</button>
    </div>
  );
}

export default MGSimulate;
