import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import data from '../data/quotes.json';

const initialState = {
  quotes: data,
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
