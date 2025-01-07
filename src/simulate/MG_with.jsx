import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MGSimulate() {
  const navigate = useNavigate();
  const [serviceDistribution, setServiceDistribution] = useState('Normal');

  const handleSubmit = () => {
    console.log(`Navigating to /MG_exp_uni`); // Added console.log for debugging

    if (serviceDistribution === 'Uniform') {
      navigate('/MG_with_exp_uni'); // Navigate when conditions are met
    } 
    if (serviceDistribution === 'Normal') {
      navigate('/MG_with_exp_norm'); // Navigate when conditions are met
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
