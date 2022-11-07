import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios';

// временная заглушка данных
const tempData = {
  "07-11-2022": [
    {
      time: "10:00",
      text: "Утренний митинг с командой"
    }
  ],
  "08-11-2022": [
    {
      time: "09:00",
      text: "Митинг с отделом frontend разработки по вопросу стека на фронте текущего проекта"
    },
    {
      time: "14:00",
      text: "Созвон с Сергеем из аналитики. Бизнес логика виджетов, функционал и сроки внедрения"
    },
  ],
  "09-11-2022": [
    {
      time: "11:00",
      text: "Старт курса корпоративной этики"
    },
    {
      time: "14:00",
      text: "Perfomance-тест с менеджером Андреем"
    },
    {
      time: "17:00",
      text: "Вечерний митинг с командой"
    },
  ],
  "11-11-2022": [
    {
      time: "09:00",
      text: "Конференция MeetUpCode"
    },
    {
      time: "14:00",
      text: "Промежуточное тестирование по курсу корпоративной этики"
    },
    {
      time: "15:00",
      text: "Промежуточное тестирование по курсу корпоративной этики"
    },
    {
      time: "16:00",
      text: "Первый этап background-check по резюме"
    },
    {
      time: "18:00",
      text: "Вечерний митинг с командой"
    },
  ],
}

export const fetchEventsByDay = createAsyncThunk('events/fetchEvents', (date) => {
  // const { data } = await axios.post('/myevents', params);
  const data = tempData[date];
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
      state.data = null
      state.status = 'error';
    },
  }
});

export const eventsReducer = eventsSlice.reducer;
export const { setEventsByDay } = eventsSlice.actions;