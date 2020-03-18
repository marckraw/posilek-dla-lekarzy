import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RestaurantsActions, selectRestaurantsList } from '../../modules/restaurants';

export const Home = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurantsList);

  useEffect(() => {
    dispatch(RestaurantsActions.fetchList());
  }, [dispatch]);

  return <div>home</div>
}