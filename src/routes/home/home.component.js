import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker, Popup, TileLayer } from 'react-leaflet';

import { RestaurantsActions, selectRestaurantsList } from '../../modules/restaurants';
import {
  Container,
  Map,
  Drawer,
  SearchInputContainer,
  SearchInput,
  ShowListButton,
  List,
} from './home.styled';
import { Restaurant } from '../../components/restaurant/restaurant.component';

const position = [52.1127, 19.2119];

export const Home = () => {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const restaurantList = useSelector(selectRestaurantsList);
  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(false);

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
    debugger;
  }, []);

  const handleOpenList = useCallback(() => setShowList(true), []);
  const handleCloseList = useCallback(() => setShowList(false), []);

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
          {Name},<br />{Phone}
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

  const renderListItem = (data, index) => (
    <Restaurant
      key={index}
      name={data.Name}
      phone={data.Phone}
      address={`${data.Address}, ${data.Town}`}
      website={data.Url}
    />
  );

  const renderList = () => (
    <Drawer
      anchor="right"
      open={showList}
      hideBackdrop
      container={containerRef.current}
      transitionDuration={0}
      disableEnforceFocus
    >
      <List>
        {filteredRestaurantList.map(renderListItem)}
      </List>
    </Drawer>
  )

  return (
    <Container ref={containerRef}>
      {renderMap()}
      {renderSearch()}
      <ShowListButton
        variant="contained"
        color="primary"
        onClick={handleOpenList}
      >
        Pokaz listę
      </ShowListButton>
      {renderList()}
    </Container>
  );
}