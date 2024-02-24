// PlanetCard.js
import React, { useState } from 'react';
import Resident from '../Resident/Resident';


function PlanetCard({ planet }) {
  const [showResidents, setShowResidents] = useState(false);

  const toggleResidentsVisibility = () => {
    setShowResidents(!showResidents);
  };

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Population: {planet.population}</p>
      <p>Terrain: {planet.terrain}</p>
      <button className="show-residents-button" onClick={toggleResidentsVisibility}>
        {showResidents ? 'Hide Residents' : 'Show Residents'}
      </button>
      {showResidents && (
        <div>
          <h3>Residents:</h3>
          <ul>
            {planet.residents.map((residentUrl, index) => (
              <li key={index}>
                <Resident residentUrl={residentUrl} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PlanetCard;
