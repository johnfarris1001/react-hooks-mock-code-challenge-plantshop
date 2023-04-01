import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchTerm }) {
  const plantsToDisplay = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  }).map(plant => {
    return <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
