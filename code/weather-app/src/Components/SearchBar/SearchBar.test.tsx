// SearchBar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

test('renders search input', () => {
    const store = mockStore({ weather: null });
    render(
        <Provider store={store}>
            <SearchBar onSearch={() => console.log('search clicked...')} />
        </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
});
