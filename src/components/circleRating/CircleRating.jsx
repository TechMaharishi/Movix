// Import React library
import React from "react";
// Import CircularProgressbar component and buildStyles function from react-circular-progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// Import the CSS for the circular progress bar
import "react-circular-progressbar/dist/styles.css";

// Import styles for the CircleRating component
import "./style.scss";

// CircleRating component to display a circular rating indicator
const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating">
            {/* CircularProgressbar component to show the rating */}
            <CircularProgressbar
                value={rating} // Set the value of the progress bar
                maxValue={10} // Set the maximum value to 10
                text={rating} // Display the rating as text inside the progress bar
                styles={buildStyles({
                    // Conditional styling based on the rating value
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

// Export the CircleRating component
export default CircleRating;
