import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import { RestaurantsActions, selectRestaurantsList } from '../../modules/restaurants';
import { Container, Map, SearchInputContainer, SearchInput, ShowListButton } from './home.styled';

const position = [52.1127, 19.2119];

export const Home = () => {
  const dispatch = useDispatch();
  const restaurantList = useSelector(selectRestaurantsList);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(RestaurantsActions.fetchList());
  }, [dispatch]);

  const filteredRestaurantList = useMemo(() => {
    return restaurantList.filter(({ Address, Town, Name }) => {
      return `${Address} ${Town} ${Name}`.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, restaurantList]);

  const handleChange = useCallback((event) => {
    const value = event.currentTarget.value;
    setQuery(value);
  }, []);

  const renderSearch = () => (
    <SearchInputContainer>
      <SearchInput
        placeholder="Wpisz adres lub nazwę..."
        onChange={handleChange}
        fullWidth
      />
    </SearchInputContainer>
  );

  const renderMarker = ({ Url, Name, Phone, Address, Town, Position }) => {
    if (!Position) {
      return null;
    }

    return (
      <Marker key={`${Name}-${Address}`} position={[Position.y, Position.x]}>
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
    <Map center={position} zoom={7} minZoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {filteredRestaurantList.map(renderMarker)}
    </Map>
  );

  return (
    <Container>
      {renderMap()}
      {renderSearch()}
      <ShowListButton
        variant="contained"
        color="primary"
      >
        Pokaz listę
      </ShowListButton>
    </Container>
  );
}