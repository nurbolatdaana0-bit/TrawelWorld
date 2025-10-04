import React, { useState } from 'react';

const countryCityData = {
  Italy: ['Rome', 'Venice', 'Florence'],
  Japan: ['Tokyo', 'Kyoto', 'Osaka'],
  Kazakhstan: ['Almaty', 'Astana', 'Shymkent'],
  Iceland: ['Reykjavik', 'Akureyri'],
  Peru: ['Lima', 'Cusco', 'Arequipa'],
    
};

function CountryCitySelector() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedCity(''); 
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const countries = Object.keys(countryCityData);
  const cities = selectedCountry ? countryCityData[selectedCountry] : [];

  return (
    <div>
      <h2>🌍 Выберите страну и город</h2>

      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Выберите страну --</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>

      <br /><br />

      {selectedCountry && (
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="">-- Выберите город --</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      )}

      <br /><br />

      {selectedCity && (
        <p>Вы выбрали: <strong>{selectedCountry}</strong>, <strong>{selectedCity}</strong></p>
      )}
    </div>
  );
}

export default LocationPicker.jsx;
