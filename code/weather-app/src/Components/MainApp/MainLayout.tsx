import React, { useState } from 'react';
import CurrentWeather from '../WeatherDisply/WeatherDisplay';
import Forecast from '../ForecastList/ForecastList';
import SearchBar from '../SearchBar/SearchBar';
import { VerticalContainer } from '../../styles';

const App = () => {
  const [city, setCity]= useState('');

  return (
    <div>
        <h1>Weather Information App</h1>
        <VerticalContainer>
            <SearchBar onSearch={(city) => { setCity(city)}} />
            <CurrentWeather city={city} />
            <Forecast city={city} />
      </VerticalContainer>
    </div>
  );
};

export default App;