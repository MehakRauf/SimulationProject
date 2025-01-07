import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function GMSimulate() {
  const navigate = useNavigate();
  const [arrivalDistribution, setArrivalDistribution] = useState('Uniform');
  const [serviceDistribution, setServiceDistribution] = useState('Exponential');

  const handleSubmit = () => {

    if (arrivalDistribution === 'Normal' && serviceDistribution === 'Exponential') {
      navigate('/GM_with_norm_exp'); // Navigate when conditions are met
    } 
   
    if (arrivalDistribution === 'Uniform' && serviceDistribution === 'Exponential') {
      navigate('/GM_with_uni_exp'); // Navigate when conditions are met
    } 
    
  };

  return (
    <div>
      <h1>G/M/S Simulation</h1>
      <div>
        <label>Arrival Distribution: </label>
        <select 
          value={arrivalDistribution} 
          onChange={(e) => setArrivalDistribution(e.target.value)}
        >
          <option value="Normal">Normal</option>
          <option value="Uniform">Uniform</option>
        </select>
      </div>

      

      <button onClick={handleSubmit}>Start Simulation</button>
    </div>
  );
}

export default GMSimulate;
