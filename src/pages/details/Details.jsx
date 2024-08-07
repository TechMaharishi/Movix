// Import necessary React components and hooks
import React from "react";
import { useParams } from "react-router-dom";

// Import custom styles for the component
import "./style.scss";

// Import custom hooks and components
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
    // Extract mediaType and id from the URL parameters
    const { mediaType, id } = useParams();

    // Fetch videos and credits data using custom hook
    const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

    return (
        <div>
            {/* Display the details banner with video and crew information */}
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />

            {/* Display cast information */}
            <Cast data={credits?.cast} loading={creditsLoading} />

            {/* Display the list of official videos */}
            <VideosSection data={data} loading={loading} />

            {/* Display similar items based on mediaType and id */}
            <Similar mediaType={mediaType} id={id} />

            {/* Display recommendations based on mediaType and id */}
            <Recommendation mediaType={mediaType} id={id} />
        </div>
    );
};

export default Details;
