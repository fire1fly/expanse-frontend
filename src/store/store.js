import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth'
import { eventsReducer } from './events'
import { notificationsReducer } from './notifications'

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    notifications: notificationsReducer
  },
});

export default store;