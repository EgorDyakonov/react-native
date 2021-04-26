import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navbar } from './components/Navbar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/mainReducer';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navbar />
      </NavigationContainer>
    </Provider>
  );
}

