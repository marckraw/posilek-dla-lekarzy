import React, { useState, useEffect } from "react";
// import data from "../data.json";

const Autocomplete = () => {
    return (
        <form class="uk-search uk-search-default">
            <input
                class="uk-search-input"
                type="search"
                placeholder="Search..."
            />
        </form>
    );
};

export default Autocomplete;
