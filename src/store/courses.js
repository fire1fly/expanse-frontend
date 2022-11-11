import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

export const fetchCourses = createAsyncThunk('events/fetchCourses', async () => {
  const { data } = await axios.get('/courses');
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.data = null;
      state.status = 'loading';
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchCourses.rejected]: (state) => {
      state.data = { message: "Неккоректные данные" };
      state.status = 'error';
    }
  }
});

export const coursesReducer = coursesSlice.reducer;