import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
    // State to manage the current endpoint for fetching trending data (either "day" or "week")
    const [endpoint, setEndpoint] = useState("day");

    // Fetch trending data based on the current endpoint ("day" or "week")
    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    // Function to handle tab changes, setting the appropriate endpoint
    const onTabChange = (tab) => {
        // Set the endpoint based on the selected tab
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                {/* Title of the section */}
                <span className="carouselTitle">Trending</span>

                {/* SwitchTabs component to toggle between "Day" and "Week" tabs */}
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>

            {/* Carousel component to display trending movies based on the current endpoint */}
            <Carousel
                data={data?.results} // Data to display in the carousel
                loading={loading} // Loading state to handle loading indication
            />
        </div>
    );
};

export default Trending;
