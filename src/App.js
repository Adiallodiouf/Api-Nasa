import React, { useState } from 'react';

const API_KEY = 'G4IVCzn2h4YZi7W5j7QfUqBnhUS0VvjcgIY3vMrp';

const App = () => {
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      );
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div className="app">
      <h1>API Astronomic picture of the day</h1>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {imageUrl && <img src={imageUrl} alt="Imagen del día" />}
    </div>
  );
};

export default App;
