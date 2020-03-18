import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonBase from '@material-ui/core/Button';

import logoUrl from './images/logo.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const Button = styled(ButtonBase)`
  && {
    margin-left: 8px;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const Menu = styled.nav`

`;

export const Logo = styled.img.attrs({
  src: logoUrl,
})`
  height: 100%;
`;