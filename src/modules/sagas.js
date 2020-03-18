import { all, fork } from 'redux-saga/effects';

import { watchRestaurants } from './restaurants/restaurants.sagas';

export default function* rootSaga() {
  try {
    yield all([
      fork(watchRestaurants),
    ]);
  } catch (e) {
    console.error(e);
  }
}
