import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth'
import { eventsReducer } from './events'

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer
  },
});

export default store;