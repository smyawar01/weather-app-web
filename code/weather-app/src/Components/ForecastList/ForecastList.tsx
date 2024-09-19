// ForecastList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../types/types';

const ForecastList: React.FC = () => {
    const forecast = useSelector((state: AppState) => state.forecast);

    if (!forecast.length) return <div>No forecast data available</div>;

    return (
        <div>
            <h2>Forecast</h2>
            <ul>
                {forecast.map((item, index) => (
                    <li key={index}>
                        <p>Date: {item.date}</p>
                        <p>Temperature: {item.temp}°C</p>
                        <p>Humidity: {item.humidity}%</p>
                        <p>Conditions: {item.conditions}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForecastList;
