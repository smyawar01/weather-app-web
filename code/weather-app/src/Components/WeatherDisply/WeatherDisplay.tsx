import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/types';

const WeatherDisplay: React.FC = () => {
    const weather = useSelector((state: AppState) => state.weather);
    const error = useSelector((state: AppState) => state.error);
    
    if (error) return <div>{error}</div>;
    if (!weather) return <div>No data available</div>;

    return (
        <div>
            <h2>Weather Information</h2>
            <p>Temperature: {weather.temp}°C</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Conditions: {weather.conditions}</p>
        </div>
    );
};

export default WeatherDisplay;
