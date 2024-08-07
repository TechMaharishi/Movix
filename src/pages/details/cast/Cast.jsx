import React from "react";
// Import useSelector hook to access Redux store state
import { useSelector } from "react-redux";

// Import styles for the component
import "./style.scss";

// Import components and assets
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

// Cast component to display a list of cast members
const Cast = ({ data, loading }) => {
    // Retrieve base URL for images from the Redux store
    const { url } = useSelector((state) => state.home);

    // Function to render skeleton loaders while data is loading
    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div> {/* Placeholder for profile image */}
                <div className="row skeleton"></div> {/* Placeholder for cast name */}
                <div className="row2 skeleton"></div> {/* Placeholder for cast character */}
            </div>
        );
    };

    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div> {/* Heading for the cast section */}
                {!loading ? (
                    <div className="listItems">
                        {data?.map((item) => {
                            // Determine the URL for the cast member's profile image
                            let imgUrl = item.profile_path
                                ? url.profile + item.profile_path
                                : avatar; // Fallback image if profile path is not available
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg">
                                        {/* Render the cast member's profile image */}
                                        <Img src={imgUrl} />
                                    </div>
                                    <div className="name">{item.name}</div> {/* Cast member's name */}
                                    <div className="character">
                                        {item.character} {/* Character played by the cast member */}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {/* Render multiple skeleton loaders while data is being fetched */}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

// Export the Cast component 
export default Cast;
