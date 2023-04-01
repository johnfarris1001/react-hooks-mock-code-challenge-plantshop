import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const plantURL = 'http://localhost:6001/plants'

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    fetch(plantURL)
      .then(r => r.json())
      .then(data => setPlants(data))
  }, [])

  function addPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <main>
      <NewPlantForm plantURL={plantURL} addPlant={addPlant} />
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <PlantList searchTerm={searchTerm} plants={plants} />
    </main>
  );
}

export default PlantPage;
