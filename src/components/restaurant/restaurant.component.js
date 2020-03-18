import React from 'react';

import { Container, Actions, Name, Url, PhoneNumber, Address } from './restaurant.styled';

export const Restaurant = ({ name, website, phone, address}) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Address>{address}</Address>
      <Actions>
        <Url href={website} target="_blank">WWW</Url>
        <PhoneNumber variant="contained" color="primary" href={`tel:${phone}`}>{phone}</PhoneNumber>
      </Actions>
    </Container>
  );
};
