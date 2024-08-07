import React from "react";
// Import Carousel component to display similar items
import Carousel from "../../../components/carousel/Carousel";
// Import custom hook for fetching data
import useFetch from "../../../hooks/useFetch";

// Similar component that fetches and displays similar media
const Similar = ({ mediaType, id }) => {
    // Use custom hook to fetch similar media based on media type and ID
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    // Determine the title based on media type
    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    // Render Carousel component with fetched data and loading state
    return (
        <Carousel
            title={title} // Title for the carousel, varies based on media type
            data={data?.results} // Data to be displayed in the carousel, specifically the 'results' from the fetched data
            loading={loading} // Loading state to show a spinner or placeholder
            endpoint={mediaType} // Media type to be used for generating URLs
        />
    );
};

export default Similar;
