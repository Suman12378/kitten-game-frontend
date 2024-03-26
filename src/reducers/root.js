// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import trackReducer from './track';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';

const persistConfig = {
   key: 'root',
   storage,
}

const persistedTrackReducer = persistReducer(persistConfig, trackReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    track: persistedTrackReducer,
    user: persistedUserReducer,
  },
});

export const persistor = persistStore(store);

export default store;
