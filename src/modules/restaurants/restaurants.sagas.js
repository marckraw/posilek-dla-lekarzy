import { all, takeLatest, put } from 'redux-saga/effects';
import { RestaurantsTypes, RestaurantsActions } from './restaurants.redux';

import staticData from '../../data/data.json';

export function* fetchList() {
  yield put(RestaurantsActions.fetchListSuccess(staticData));
}

export function* watchRestaurants() {
  yield all([takeLatest(RestaurantsTypes.FETCH_LIST, fetchList)]);
}
