import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setError, fetchWeather } from '../../redux/actions/actions';
import axios from 'axios';

const SearchBar: React.FC = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = async () => {
        dispatch(setLoading(true));
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=780109c46245bc6fc4a6fdc41c858348`);
            const data = response.data;
            dispatch(fetchWeather({ temp: data.main.temp, humidity: data.main.humidity, conditions: data.weather[0].description }));
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
