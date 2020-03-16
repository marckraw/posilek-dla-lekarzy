import React from "react";

const RestaurantCard = props => {
    const makeOrder = () => {
        console.log("making order....");
    };
    return (
        <div className="uk-card uk-card-default uk-card-body uk-margin-left">
            <h3 className="uk-card-title">{props.data.name}</h3>
            <h4>
                {props.data.town} {props.data.address}
            </h4>
            <h5>{props.data.phone}</h5>
            {props.data.mealsLeft > 0 ? (
                <button onClick={makeOrder}>
                    Zamów (pozostalo: {props.data.mealsLeft})
                </button>
            ) : (
                <button disabled>
                    Zamów (pozostalo: {props.data.mealsLeft})
                </button>
            )}
        </div>
    );
};

export default RestaurantCard;
