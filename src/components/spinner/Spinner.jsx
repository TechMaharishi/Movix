import React from "react";

// Import styles for the Spinner component
import "./style.scss";

// Spinner component to display a loading spinner
const Spinner = ({ initial }) => {
    return (
        <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
            {/* SVG element for the spinner animation */}
            <svg className="spinner" viewBox="0 0 50 50">
                {/* Circle element representing the spinner path */}
                <circle
                    className="path"
                    cx="25" // Center x-coordinate of the circle
                    cy="25" // Center y-coordinate of the circle
                    r="20"  // Radius of the circle
                    fill="none" // No fill color
                    strokeWidth="5" // Width of the stroke
                ></circle>
            </svg>
        </div>
    );
};


export default Spinner;
