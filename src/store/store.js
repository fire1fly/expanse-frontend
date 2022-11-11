import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth'
import { eventsReducer } from './events'
import { notificationsReducer } from './notifications'
import { coursesReducer } from './courses'

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    notifications: notificationsReducer,
    courses: coursesReducer
  },
});

export default store;