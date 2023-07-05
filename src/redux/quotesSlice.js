import { createSlice } from '@reduxjs/toolkit';

import data from '../data/quotes.json';

const quotesInitialState = {
  quotes: data,
};

const quotesSlice = createSlice({
  // Ім'я слайсу
  name: 'quotes',
  // Початковий стан редюсера слайсу
  initialState: quotesInitialState,
  // Об'єкт редюсерів
  reducers: {},
});

export const quotesReducer = quotesSlice.reducer;
