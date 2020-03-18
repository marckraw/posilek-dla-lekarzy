import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

import { Home } from './routes/home/home.component';
import { About } from './routes/about/about.component';

import { theme } from './theme/materialTheme';
import { Container, Logo, Menu, Header, Button } from './app.styled';

export const App = () => {
  const handleCrowdfoundActionClick = () => {
    window.open('https://zrzutka.pl/posilekdlalekarza', '_blank');
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <Header>
            <Logo />
            <Menu>
              <Button>
                <Link to="/">
                    Mapa lokali
                </Link>
              </Button>
              <Button>
                <Link to="/about">
                  O akcji
                </Link>
              </Button>
              <Button variant="outlined" color="primary" onClick={handleCrowdfoundActionClick}>
                Dorzuć się!
              </Button>
            </Menu>
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  )
}