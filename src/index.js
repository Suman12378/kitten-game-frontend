import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import  store, { persistor }  from './reducers/root'
import { PersistGate } from 'redux-persist/integration/react'
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor} loading = {null}>
             <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);

