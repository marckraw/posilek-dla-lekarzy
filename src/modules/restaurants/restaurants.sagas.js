import { all, takeLatest, put } from 'redux-saga/effects';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

import { RestaurantsTypes, RestaurantsActions } from './restaurants.redux';
import staticRestaurantData from '../../data/data.json';

const provider = new OpenStreetMapProvider();

export function* fetchList() {
  // try {
  //   for (let index = 0; index < staticRestaurantData.length; index++) {
  //     const { Town, Address } = staticRestaurantData[index];
  //     const results = yield provider.search({ query: `${Address}, ${Town}` });

  //     if (results.length) {
  //       const { x, y } = results[0];
  //       staticRestaurantData[index].location = { x, y };
  //     }
  //   }
  // } catch (error) {
  //   console.error(error)
  // }
  yield put(RestaurantsActions.fetchListSuccess(staticRestaurantData));
}

export function* watchRestaurants() {
  yield all([takeLatest(RestaurantsTypes.FETCH_LIST, fetchList)]);
}
