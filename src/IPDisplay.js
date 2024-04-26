import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPDisplay = () => {
  const [ip, setIp] = useState('');

  useEffect(() => {
    axios.get('https://api.ipify.org?format=json')
      .then(response => {
        setIp(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 style={{ color: '#333', fontSize: '2em' }}>Your IP Address is:</h1>
      <p style={{ color: '#555', fontSize: '1.5em' }}>{ip}</p>
    </div>
  );
};

export default IPDisplay;