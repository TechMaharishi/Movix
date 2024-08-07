// Import React library and hooks for state and effect management
import React, { useState, useEffect } from "react";
// Import icons for search, menu, and close actions
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
// Import hooks for navigation and location handling
import { useNavigate, useLocation } from "react-router-dom";

// Import styles for the Header component
import "./style.scss";

// Import the ContentWrapper component for consistent styling
import ContentWrapper from "../contentWrapper/ContentWrapper";
// Import the logo image
import logo from "../../assets/movix-logo.svg";

// Header component to display the site header with navigation and search functionality
const Header = () => {
    // State variables to manage navbar visibility, scroll position, mobile menu, and search
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");

    // Hooks for navigation and location
    const navigate = useNavigate();
    const location = useLocation();

    // Effect to scroll to the top when location changes (e.g., on route change)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Function to control navbar visibility based on scroll position
    const controlNavbar = () => {
        if (window.scrollY > 200) {
            // Hide navbar on scroll down, show on scroll up, if not in mobile menu view
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        // Update last scroll position
        setLastScrollY(window.scrollY);
    };

    // Effect to add and clean up scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    // Function to handle search query submission on Enter key press
    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            // Close search bar after a short delay
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    // Function to open the search bar
    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    // Function to open the mobile menu
    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    // Function to handle navigation to movies or TV shows
    const navigationHandler = (type) => {
        if (type === "movie") {
            navigate("/explore/movie");
        } else {
            navigate("/explore/tv");
        }
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            {/* Wrap content with ContentWrapper for consistent styling */}
            <ContentWrapper>
                {/* Logo section that navigates to the homepage when clicked */}
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="Movix Logo" />
                </div>
                {/* Navigation menu items */}
                <ul className="menuItems">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Movies
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("tv")}
                    >
                        TV Shows
                    </li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

                {/* Mobile menu items and icons */}
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            {/* Conditional rendering of the search bar */}
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};


export default Header;
