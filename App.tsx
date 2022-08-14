import { Provider } from 'react-redux'
import {store, persistedStore} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './src/Pages/Home';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Home/>
      </PersistGate>
    </Provider>
  );
}


