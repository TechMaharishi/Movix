import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    // State to hold the background image URL
    const [background, setBackground] = useState("");
    // State to hold the search query
    const [query, setQuery] = useState("");
    // Hook to programmatically navigate
    const navigate = useNavigate();
    // Retrieve the URL base from the Redux store
    const { url } = useSelector((state) => state.home);
    // Fetch upcoming movies data
    const { data, loading } = useFetch("/movie/upcoming");

    // Effect to set a random backdrop image as the background
    useEffect(() => {
        if (data?.results?.length > 0) {
            // Randomly select a movie's backdrop path
            const bg =
                url.backdrop +
                data.results[Math.floor(Math.random() * data.results.length)]?.backdrop_path;
            setBackground(bg);
        }
    }, [data, url.backdrop]); // Dependency on data and URL base

    // Handler for search input key press
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            // Navigate to the search results page
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {/* Display the background image if not loading */}
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            {/* Overlay to darken the background image */}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            // Update the search query state
                            onChange={(e) => setQuery(e.target.value)}
                            // Trigger search on Enter key press
                            onKeyUp={searchQueryHandler}
                        />
                        {/* Button to trigger search */}
                        <button onClick={searchQueryHandler}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
