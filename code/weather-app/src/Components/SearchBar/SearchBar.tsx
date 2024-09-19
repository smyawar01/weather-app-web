// SearchBar.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setError, fetchWeather, fetchForecast } from '../../redux/actions/actions';
import axios from 'axios';

const SearchBar: React.FC = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = async () => {
        dispatch(setLoading(true));
        try {
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=780109c46245bc6fc4a6fdc41c858348`);
            const weatherData = weatherResponse.data;
            dispatch(fetchWeather({ temp: weatherData.main.temp, humidity: weatherData.main.humidity, conditions: weatherData.weather[0].description }));

            // Fetch the forecast data
            const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=780109c46245bc6fc4a6fdc41c858348`);
            const forecastData = forecastResponse.data.list.map((item: any) => ({
                temp: item.main.temp,
                humidity: item.main.humidity,
                conditions: item.weather[0].description,
                date: item.dt_txt,
            }));
            dispatch(fetchForecast(forecastData));

        } catch (error) {
            dispatch(setError('City not found'));
        }
    };

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
