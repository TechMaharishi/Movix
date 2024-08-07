// Import necessary hooks and components from React and libraries
import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs"; // Import arrow icons from react-icons
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation
import { useSelector } from "react-redux"; // Import useSelector hook to access Redux store state
import dayjs from "dayjs"; // Import dayjs for date formatting

// Import custom components and assets
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

// Import styles
import "./style.scss";

// Carousel component to display a scrolling list of items
const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef(); // Create a ref to the carousel container
    const { url } = useSelector((state) => state.home); // Access the url state from the Redux store
    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    // Function to handle navigation of the carousel
    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    // Function to render skeleton loading items
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel">
            <ContentWrapper>
                {/* Display title if provided */}
                {title && <div className="carouselTitle">{title}</div>}
                {/* Left navigation arrow */}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                {/* Right navigation arrow */}
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {/* Display carousel items or loading skeletons */}
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback; // Fallback image if no poster path
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem"
                                    onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${item.id
                                            }`
                                        )
                                    } // Navigate to the item's detail page on click
                                >
                                    <div className="posterBlock">
                                        <Img src={posterUrl} /> {/* Display poster image */}
                                        <CircleRating
                                            rating={item.vote_average.toFixed(
                                                1
                                            )}
                                        /> {/* Display rating */}
                                        <Genres
                                            data={item.genre_ids.slice(0, 2)}
                                        /> {/* Display genres */}
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name} {/* Display title or name */}
                                        </span>
                                        <span className="date">
                                            {dayjs(item.release_date || item.first_air_date).format(
                                                "MMM D, YYYY"
                                            )} {/* Display release date */}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
