import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const fetchNotifications = createAsyncThunk('notifications/fetchNotifications', async () => {
  const { data } = await axios.get('/notifications');
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  extraReducers: {
    [fetchNotifications.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchNotifications.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchNotifications.rejected]: (state) => {
      state.data = null;
      state.status = 'error';
    },
  }
});

export const notificationsReducer = notificationsSlice.reducer;