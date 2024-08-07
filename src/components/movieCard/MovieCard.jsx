import React from "react";
// Import dayjs for formatting dates
import dayjs from "dayjs";
// Import useNavigate hook from react-router-dom for navigation
import { useNavigate } from "react-router-dom";
// Import useSelector hook from react-redux to access Redux store state
import { useSelector } from "react-redux";

// Import styles for the MovieCard component
import "./style.scss";
// Import Img component for lazy loading images
import Img from "../lazyLoadImage/Img";
// Import CircleRating component for displaying movie ratings
import CircleRating from "../circleRating/CircleRating";
// Import Genres component to display movie genres
import Genres from "../genres/Genres";
// Import fallback image for posters
import PosterFallback from "../../assets/no-poster.png";

// MovieCard component to display movie or TV show details in a card format
const MovieCard = ({ data, fromSearch, mediaType }) => {
    // Access the URL configuration from the Redux store
    const { url } = useSelector((state) => state.home);
    // Hook for programmatic navigation
    const navigate = useNavigate();
    
    // Determine the poster URL or use fallback image if poster_path is not available
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;

    return (
        <div
            className="movieCard"
            // Navigate to details page on card click, using mediaType if not present in data
            onClick={() =>
                navigate(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock">
                {/* Render poster image with lazy loading */}
                <Img className="posterImg" src={posterUrl} />
                {/* Conditionally render rating and genres if not from search results */}
                {!fromSearch && (
                    <React.Fragment>
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                        <Genres data={data.genre_ids.slice(0, 2)} />
                    </React.Fragment>
                )}
            </div>
            <div className="textBlock">
                {/* Display movie or TV show title */}
                <span className="title">{data.title || data.name}</span>
                {/* Display formatted release date */}
                <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    );
};


export default MovieCard;
