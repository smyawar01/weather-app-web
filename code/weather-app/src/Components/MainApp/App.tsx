import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import MainLayout from './MainLayout';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <MainLayout />
        </Provider>
    );
};

export default App;
