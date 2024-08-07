
import React from "react";
// Import LazyLoadImage component from react-lazy-load-image-component for lazy loading images
import { LazyLoadImage } from "react-lazy-load-image-component";
// Import CSS for the blur effect when images are lazy loaded
import "react-lazy-load-image-component/src/effects/blur.css";

// Img component for rendering images with lazy loading and blur effect
const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""} // Apply custom className if provided, or default to an empty string
            alt="" // Alt text for the image (can be enhanced with descriptive text)
            effect="blur" // Apply blur effect while the image is loading
            src={src} // Source URL of the image
        />
    );
};


export default Img;
