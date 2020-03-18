import { combineReducers } from 'redux';

import { reducer as restaurantsReducer } from './restaurants/restaurants.redux';

export default function createReducer() {
  return combineReducers({
    restaurants: restaurantsReducer,
  });
}
