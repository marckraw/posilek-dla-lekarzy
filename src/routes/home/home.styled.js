import styled from 'styled-components';
import { Map as MapBase } from 'react-leaflet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Colors } from '../../theme/colors'

export const Container = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 100px;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: inset 0px -64px 63px -58px ${Colors.black};
  }
`;

export const Map = styled(MapBase)`
  height: inherit;
  z-index: 1;
`;

export const SearchInputContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: 50px;
  top: 10px;
  background-color: ${Colors.white};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 3px ${Colors.black_40};
  min-width: 250px;
`;

export const SearchInput = styled(TextField)``;

export const ShowListButton = styled(Button)`
  && {
    position: absolute;
    z-index: 2;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;