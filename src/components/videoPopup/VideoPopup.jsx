import React from "react";
// Import ReactPlayer component for playing YouTube videos
import ReactPlayer from "react-player/youtube";

// Import styles for the VideoPopup component
import "./style.scss";

// VideoPopup component to display a popup with a YouTube video player
const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
    // Function to hide the popup and reset video ID
    const hidePopup = () => {
        setShow(false); // Close the popup
        setVideoId(null); // Clear the video ID
    };

    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            {/* Overlay layer to close the popup when clicked */}
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                {/* Close button to hide the popup */}
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>
                {/* ReactPlayer component to embed YouTube video */}
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`} // URL of the YouTube video
                    controls // Show video controls
                    width="100%" // Set player width to 100%
                    height="100%" // Set player height to 100%
                // playing={true} // Uncomment to start video playback automatically
                />
            </div>
        </div>
    );
};


export default VideoPopup;
