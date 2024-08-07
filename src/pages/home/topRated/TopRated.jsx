import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
    // State to manage the current endpoint for fetching top-rated data (either "movie" or "tv")
    const [endpoint, setEndpoint] = useState("movie");

    // Fetch top-rated data based on the current endpoint
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    // Function to handle tab changes, setting the appropriate endpoint
    const onTabChange = (tab) => {
        // Set the endpoint based on the selected tab
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                {/* Title of the section */}
                <span className="carouselTitle">Top Rated</span>

                {/* SwitchTabs component to toggle between Movies and TV Shows */}
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>

            {/* Carousel component to display top-rated items based on the current endpoint */}
            <Carousel
                data={data?.results} // Data to display in the carousel
                loading={loading} // Loading state to handle loading indication
                endpoint={endpoint} // Current endpoint used for fetching data
            />
        </div>
    );
};

export default TopRated;
