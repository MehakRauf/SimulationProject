import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Simulation() {
  const navigate = useNavigate();
  return (
    <div className="container">
    <h1>Select </h1>
    <div className="model-buttons">
        <button className='model-button' onClick={() => navigate('/MG_with')}>With Priority</button>
        <button className='model-button' onClick={() => navigate('/MGSimulate')}>Without Priority</button>        
    </div>
</div>
  )
}
