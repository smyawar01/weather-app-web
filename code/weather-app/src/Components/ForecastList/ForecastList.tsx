// ForecastList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecast } from '../../redux/forecast/action';
import { CenteredDiv, ContainerDiv, Content } from '../../styles';
import { AppState } from '../../redux/store';

interface Props {
    city: string;
}
const ForecastList: React.FC<Props> = ({ city }) => {
    
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state: AppState) => state.forecast);

    useEffect(() => {
        dispatch(fetchForecast(city));
    }, [dispatch, city]);

    const showContent = () => {

        if (loading) return <p>Loading forecast...</p>;
        if (error) return <p>Error: {error}</p>;
        if (!data.length) return <div>No forecast data available</div>;

        <Content>
            <h2>Forecast</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <p>Date: {item.date}</p>
                        <p>Temperature: {item.temp}°C</p>
                        <p>Humidity: {item.humidity}%</p>
                        <p>Conditions: {item.conditions}</p>
                    </li>
                ))}
            </ul>
        </Content>
    }

    return (
        <ContainerDiv>
            <CenteredDiv>
                { showContent() }
            </CenteredDiv>
        </ContainerDiv>
    );
};

export default ForecastList;
