// Resident.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Resident({ residentUrl }) {
  const [resident, setResident] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResident() {
      try {
        const response = await axios.get(residentUrl);
        setResident(response.data);
      } catch (error) {
        console.error('Error fetching resident:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchResident();
  }, [residentUrl]);

  if (isLoading) {
    return <p>Loading resident data...</p>; // Show loading message while fetching data
  }

  if (!resident) {
    return null; // Return null if resident data is not available
  }

  return (
    <div>
      <p>Name: {resident.name}</p>
      <p>Height: {resident.height}</p>
      <p>Mass: {resident.mass}</p>
      <p>Gender: {resident.gender}</p>
    </div>
  );
}

export default Resident;
