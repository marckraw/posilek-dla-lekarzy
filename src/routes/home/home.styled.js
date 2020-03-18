import styled from 'styled-components';
import { Map as MapBase } from 'react-leaflet';


export const Container = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const Map = styled(MapBase)`
  height: inherit;
`;