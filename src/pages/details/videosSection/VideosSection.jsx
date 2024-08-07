// Import necessary React hooks and components
import React, { useState } from "react";

// Import styles for the component
import "./style.scss";

// Import custom components and assets
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../Playbtn";

const VideosSection = ({ data, loading }) => {
    // State for managing the visibility of the video popup and selected video ID
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    // Function to generate skeleton loading UI
    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="videosSection">
            <ContentWrapper>
                {/* Section heading */}
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {/* Map through video data to display video items */}
                        {data?.results?.map((video) => (
                            <div
                                key={video.id}
                                className="videoItem"
                                onClick={() => {
                                    // Set the video ID and show the video popup when an item is clicked
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="videoThumbnail">
                                    {/* Display video thumbnail */}
                                    <Img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                    />
                                    {/* Display play icon over thumbnail */}
                                    <PlayIcon />
                                </div>
                                {/* Display video title */}
                                <div className="videoTitle">{video.name}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {/* Display skeleton loaders while data is loading */}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            {/* Video popup component for displaying the selected video */}
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection;
