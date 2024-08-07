// Import React and useState hook for managing component state
import React, { useState } from "react";

// Import styles for the SwitchTabs component
import "./style.scss";

// SwitchTabs component to render a tab switcher with animation
const SwitchTabs = ({ data, onTabChange }) => {
    // State to keep track of the currently selected tab
    const [selectedTab, setSelectedTab] = useState(0);
    // State to handle the position of the background underline
    const [left, setLeft] = useState(0);

    // Function to handle tab changes and update the selected tab
    const activeTab = (tab, index) => {
        // Update the position of the moving background
        setLeft(index * 100);
        // Delay updating the selected tab to allow for animation
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        // Call the onTabChange callback with the selected tab and index
        onTabChange(tab, index);
    };

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {/* Render tab items based on the provided data */}
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${selectedTab === index ? "active" : ""
                            }`}
                        // Call activeTab function on tab click
                        onClick={() => activeTab(tab, index)}
                    >
                        {tab}
                    </span>
                ))}
                {/* Background underline for active tab */}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};


export default SwitchTabs;
