
import React from "react";
// Import useSelector hook from react-redux to access Redux store state
import { useSelector } from "react-redux";

// Import styles for the Genres component
import "./style.scss";

// Genres component to display a list of genres based on provided data
const Genres = ({ data }) => {
    // Access the genres state from the Redux store
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {/* Map through the data array and display each genre */}
            {data?.map((g) => {
                // If the genre name does not exist, return nothing
                if (!genres[g]?.name) return null;
                // Otherwise, return a div with the genre name
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};


export default Genres;
