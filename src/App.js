import React, { useState, useEffect } from "react";
import Autocomplete from "./components/Autocomplete";
import "./main.scss";
import RestaurantCard from "./components/RestaurantCard";
import restaurants_list from "./data/data.json";

function App() {
    const [townValue, setTownValue] = useState("");
    const [restaurantList, setRestaurantList] = useState(restaurants_list);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState(
        restaurants_list
    );

    useEffect(() => {
        setFilteredRestaurantList(
            restaurantList.filter(restaurant =>
                restaurant.Town.toUpperCase().includes(townValue.toUpperCase())
            )
        );
    }, [townValue, restaurantList]);

    const handleChange = event => {
        const value = event.currentTarget.value;
        setTownValue(value);
    };

    return (
        <>
            <div className="uk-container" style={{ marginTop: "100px" }}>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                    {/* <h3 className="uk-card-title">Wpisz województwo</h3>
                    <Autocomplete /> */}
                    <h3 className="uk-card-title">Wpisz miasto</h3>
                    <form className="uk-search uk-search-default">
                        <input
                            className="uk-search-input"
                            type="search"
                            name="town"
                            id="town"
                            placeholder="Search..."
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </div>

            <div className="uk-container" style={{ marginTop: "100px" }}>
                <h1 className="uk-heading-medium">
                    Restauracje blisko ciebie:{" "}
                </h1>
                <div className="uk-flex uk-flex-wrap uk-flex-wrap-around">
                    {filteredRestaurantList.map(restaurant => {
                        return <RestaurantCard data={restaurant} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
