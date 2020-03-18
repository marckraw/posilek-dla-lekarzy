import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import { RestaurantsActions, selectRestaurantsList } from '../../modules/restaurants';
import { Container, Map } from './home.styled';

const position = [52.1127, 19.2119];

export const Home = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector(selectRestaurantsList);
  const [townValue, setTownValue] = useState(null);

  useEffect(() => {
    dispatch(RestaurantsActions.fetchList());
  }, [dispatch]);

  const filteredRestaurantList = useMemo(() => {
    return restaurantList;
  }, [townValue, restaurantList]);

  const markers = useMemo(() => {

  }, [filteredRestaurantList]);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setTownValue(value);
  };

  const renderMarker = ({ Url, Name, Phone, Address, Town, Position }) => {
    if (!Position) {
      return null;
    }

    return (
      <Marker position={[Position.y, Position.x]}>
        <Popup>
          {Name}
          {Phone}
          {Address}, {Town}
          {Url}
        </Popup>
      </Marker>
    )
  };

  const renderMap = () => (
    <Map center={position} zoom={7}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {filteredRestaurantList.map(renderMarker)}
      {/* <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker> */}
    </Map>
  );

  return (
    <Container>
      {renderMap()}
    </Container>
  );
}