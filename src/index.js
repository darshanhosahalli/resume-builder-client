import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './utils/ConfigureStore';

const App = ({ children }) => {
  return <Provider store={configureStore()}>
          {children}
        </Provider>
};

export default App;