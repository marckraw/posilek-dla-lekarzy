// import React, { useState, useEffect, useCallback } from "react";
// import "./main.scss";
// import RestaurantCard from "./components/RestaurantCard";
// import restaurants_list from "./data/data.json";

// const debounce = (fn, delay) => {
//     let timeoutId;
//     return function(...args) {
//         clearInterval(timeoutId);
//         timeoutId = setTimeout(() => fn.apply(this, args), delay);
//     };
// };

// function App() {
//     const [townValue, setTownValue] = useState("");
//     const [restaurantList, setRestaurantList] = useState(restaurants_list);
//     const [filteredRestaurantList, setFilteredRestaurantList] = useState(null);

//     const debounceCallback = useCallback(
//         debounce(value => {
//             setFilteredRestaurantList(value);
//         }, 500),
//         []
//     );

//     useEffect(() => {
//         debounceCallback(
//             restaurantList.filter(restaurant =>
//                 restaurant.Town.toUpperCase().includes(townValue.toUpperCase())
//             )
//         );
//     }, [townValue, restaurantList, debounceCallback]);

//     const handleChange = event => {
//         const value = event.currentTarget.value;
//         setTownValue(value);
//     };

//     return (
//         <>
//             <div className="uk-container" style={{ marginTop: "100px" }}>
//                 <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
//                     <h3 className="uk-card-title">Wpisz miasto</h3>
//                     <form className="uk-search uk-search-default">
//                         <input
//                             className="uk-search-input"
//                             type="search"
//                             name="town"
//                             id="town"
//                             placeholder="Wpisz miasto..."
//                             onChange={handleChange}
//                         />
//                     </form>
//                 </div>
//             </div>

//             <div className="uk-container" style={{ marginTop: "100px" }}>
//                 <h1 className="uk-heading-medium">
//                     Restauracje blisko ciebie:{" "}
//                 </h1>
//                 <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
//                     {filteredRestaurantList &&
//                         filteredRestaurantList.length === 0 && (
//                             <div>
//                                 Nie ma restauracji zapisanej do naszej akcji w
//                                 tym mieście
//                             </div>
//                         )}
//                     {townValue === "" ? (
//                         <div>Zacznij wpisywac nazwe miasta</div>
//                     ) : (
//                         filteredRestaurantList &&
//                         filteredRestaurantList.map(restaurant => {
//                             return (
//                                 <RestaurantCard
//                                     data={restaurant}
//                                     key={
//                                         restaurant.Name +
//                                         restaurant.Phone +
//                                         restaurant.Town
//                                     }
//                                 />
//                             );
//                         })
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './routes/home/home.component';
import { About } from './routes/about/about.component';

import { Container, Logo, Menu, Header, Button } from './app.styled';

export const App = () => {
  const handleCrowdfoundActionClick = () => {
    window.open('https://zrzutka.pl/posilekdlalekarza', '_blank');
  }

  return (
    <Router>
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
    </Router>
  )
}