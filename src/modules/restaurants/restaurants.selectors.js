import { createSelector } from 'reselect';
import { prop } from 'ramda';

export const selectRestaurantsDomain = prop('restaurants');

export const selectRestaurantsList = createSelector(
  selectRestaurantsDomain, prop('restaurantsList')
);
