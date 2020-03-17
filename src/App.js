import React from "react";
import Autocomplete from "./components/Autocomplete";
import "./main.scss";
import RestaurantCard from "./components/RestaurantCard";

const restaurants_list = [
    {
        name: "Cafe Fukrot",
        url: "https://facebook.com/CafeFurkotChlodna",
        town: "Warszawa",
        address: "Chłodna 2/18",
        phone: "221213145;733087956",
        mealsLeft: "26"
    },
    {
        name: "Kiełba w Gębie",
        url: "https://facebook.com/kielbawgebie/",
        town: "Warszawa",
        address: "Koszykowa 63",
        phone: "228498597",
        mealsLeft: "0"
    },
    {
        name: "Agencja Cateringowa Party",
        url: "https://facebook.com/AgencjaCateringowaParty",
        town: "Warszawa",
        address: "Rakowiecka 36",
        phone: "515908011",
        mealsLeft: "2"
    },
    {
        name: "Agencja Bonifacy",
        url: "https://facebook.com/AgencjaCateringowaParty",
        town: "Warszawa",
        address: "jakaś 36",
        phone: "781723123123",
        mealsLeft: "20"
    },
    {
        name: "Bistro Waza Smoków",
        url: "https://facebook.com/AgencjaCateringowaParty",
        town: "Katowice",
        address: "jakaś 23",
        phone: "090909090",
        mealsLeft: "20"
    },
    {
        name: "Vendetta",
        url: "https://pizzadrawsko.pl/",
        town: "Drawsko Pomorskie",
        address: "Sikorskiego 111",
        phone: "943636660",
        mealsLeft: "1"
    }
];

function App() {
    return (
        <>
            <div class="uk-container" style={{ marginTop: "100px" }}>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                    <h3 className="uk-card-title">Wpisz województwo</h3>
                    <Autocomplete />
                    <h3 className="uk-card-title">Wpisz miasto</h3>
                    <Autocomplete />
                </div>
            </div>

            <div class="uk-container" style={{ marginTop: "100px" }}>
                <h1 className="uk-heading-medium">
                    Restauracje blisko ciebie:{" "}
                </h1>
                <div class="uk-flex uk-flex-wrap uk-flex-wrap-around">
                    {restaurants_list.map(restaurant => {
                        return <RestaurantCard data={restaurant} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
