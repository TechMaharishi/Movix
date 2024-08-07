// Import React library
import React from "react";

// Import styles for the ContentWrapper component
import "./style.scss";

// ContentWrapper component to wrap its children with a styled div
const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

// Export the ContentWrapper component
export default ContentWrapper;
