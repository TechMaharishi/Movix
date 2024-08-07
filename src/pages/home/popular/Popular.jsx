import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
    // State to manage the current endpoint for fetching data (either "movie" or "tv")
    const [endpoint, setEndpoint] = useState("movie");

    // Fetch popular data based on the current endpoint
    const { data, loading } = useFetch(`/${endpoint}/popular`);

    // Function to handle tab changes, setting the appropriate endpoint
    const onTabChange = (tab) => {
        // Set the endpoint based on the selected tab
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                {/* Title of the section */}
                <span className="carouselTitle">What's Popular</span>

                {/* SwitchTabs component to toggle between Movies and TV Shows */}
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>

            {/* Carousel component to display popular items based on the current endpoint */}
            <Carousel
                data={data?.results} // Data to display in the carousel
                loading={loading} // Loading state to handle loading indication
                endpoint={endpoint} // Current endpoint used for fetching data
            />
        </div>
    );
};

export default Popular;
