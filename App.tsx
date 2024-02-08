import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {Home} from './src/views';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
