import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const fetchEventsByDay = createAsyncThunk('events/fetchEventsByDay', async (params) => {
  const { data } = await axios.post('/eventsByDay', params);
  console.log(data);
  return data;
});


const initialState = {
  data: null,
  status: 'loading',
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEventsByDay: (state, payload) => {
      state[payload.date] = payload.events
    }
  },
  extraReducers: {
    [fetchEventsByDay.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchEventsByDay.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchEventsByDay.rejected]: (state) => {
      state.data =
        state.status = 'error';
    },
  }
});

export const eventsReducer = eventsSlice.reducer;
export const { setEventsByDay } = eventsSlice.actions;