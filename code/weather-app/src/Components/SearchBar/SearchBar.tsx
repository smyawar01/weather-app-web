// SearchBar.tsx
import React, { useState } from 'react';
import { CenteredDiv, ContainerDiv, Content } from '../../styles';

interface Props {
    onSearch: (city: string) => void;
}
const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    return (
        <ContainerDiv>
            <CenteredDiv>
                <Content>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                <button onClick={() => { onSearch(city) }}>Search</button>
                </Content>
            </CenteredDiv>
        </ContainerDiv>
    );
};

export default SearchBar;
