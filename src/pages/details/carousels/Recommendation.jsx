import React from "react";
// Import Carousel component to display recommendations
import Carousel from "../../../components/carousel/Carousel";
// Import custom hook for fetching data
import useFetch from "../../../hooks/useFetch";

// Recommendation component that fetches and displays recommended media
const Recommendation = ({ mediaType, id }) => {
    // Use custom hook to fetch recommendations based on media type and ID
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations` // Construct the API URL for fetching recommendations
    );

    // Render Carousel component with fetched data and loading state
    return (
        <Carousel
            title="Recommendations" // Title for the carousel
            data={data?.results} // Data to be displayed in the carousel, specifically the 'results' from the fetched data
            loading={loading} // Loading state to show a spinner or placeholder
            endpoint={mediaType} // Media type to be used for generating URLs
        />
    );
};

// Export the Recommendation component
export default Recommendation;
