import React from "react";

const RestaurantCard = props => {
    const makeOrder = () => {
        console.log("making order....");
    };
    return (
        <div className="uk-card uk-card-default uk-card-body uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">
            <h3 className="uk-card-title">
                <a
                    href={props.data.Url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {props.data.Name}
                </a>
            </h3>
            <h4>
                {props.data.Town} {props.data.Address}
            </h4>
            <h5>
                {" "}
                <strong>Telefon:</strong> {props.data.Phone}
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
