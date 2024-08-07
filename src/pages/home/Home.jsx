import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
    return (
        <div className="homePage">
            {/* HeroBanner component for displaying the main banner with promotional content */}
            <HeroBanner />

            {/* Trending component to show trending movies or TV shows */}
            <Trending />

            {/* Popular component to display popular movies or TV shows */}
            <Popular />

            {/* TopRated component for showcasing top-rated movies or TV shows */}
            <TopRated />
        </div>
    );
};

export default Home;
