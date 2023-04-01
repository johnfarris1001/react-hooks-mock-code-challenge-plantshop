import React, { useState } from "react";

function NewPlantForm({ plantURL, addPlant }) {
  const [plantName, setPlantName] = useState('')
  const [plantImage, setPlantImage] = useState('')
  const [plantPrice, setPlantPrice] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newPlant = {
      name: plantName,
      image: plantImage,
      price: plantPrice
    }
    fetch(plantURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(data => addPlant(data))

    setPlantName('')
    setPlantImage('')
    setPlantPrice('')
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setPlantName(e.target.value)}
          value={plantName}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={e => setPlantImage(e.target.value)}
          value={plantImage}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={e => setPlantPrice(e.target.value)}
          value={plantPrice}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
