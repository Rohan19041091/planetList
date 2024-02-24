// PlanetsContainer.js
import React from 'react';
import PlanetCard from '../plantCard/PlanetCard';

function PlanetsContainer({ planets }) {
  return (
    <div className="planets-container">
      {planets.map((planet, index) => (
        <PlanetCard key={index} planet={planet} />
      ))}
    </div>
  );
}

export default PlanetsContainer;
