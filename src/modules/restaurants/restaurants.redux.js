import { createActions, createReducer } from 'reduxsauce';

export const { Types: RestaurantsTypes, Creators: RestaurantsActions } = createActions(
  {
    fetchList: [],
    fetchListSuccess: ['restaurantsList'],
  },
  { prefix: 'RESTAURANTS/' }
);

export const INITIAL_STATE = {
  restaurantsList: []
};

export const fetchListSuccess = (state, { restaurantsList }) => ({ ...state, restaurantsList });

export const reducer = createReducer(INITIAL_STATE, {
  [RestaurantsTypes.FETCH_LIST_SUCCESS]: fetchListSuccess,
});
