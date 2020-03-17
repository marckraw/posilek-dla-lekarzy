import React from "react";

const RestaurantCard = props => {
    const makeOrder = () => {
        console.log("making order....");
    };
    return (
        <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">
            <h3 className="uk-card-title">
                <a
                    href={props.data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.data.name}
                </a>
            </h3>
            <h4>
                {props.data.town} {props.data.address}
            </h4>
            <h5>
                {" "}
                <strong>Telefon:</strong> {props.data.phone}
            </h5>
            {/* {props.data.mealsLeft > 0 ? (
                <button onClick={makeOrder}>
                    Zamów (pozostalo: {props.data.mealsLeft})
                </button>
            ) : (
                <button disabled>
                    Zamów (pozostalo: {props.data.mealsLeft})
                </button>
            )} */}
        </div>
    );
};

export default RestaurantCard;
