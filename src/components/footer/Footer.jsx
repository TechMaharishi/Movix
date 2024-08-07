// Import React library
import React from "react";
// Import social media icons from react-icons/fa
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

// Import the ContentWrapper component
import ContentWrapper from "../contentWrapper/ContentWrapper";

// Import styles for the Footer component
import "./style.scss";

// Footer component to display footer content
const Footer = () => {
    return (
        <footer className="footer">
            {/* Wrap content with ContentWrapper for consistent styling */}
            <ContentWrapper>
                {/* List of footer menu items */}
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                {/* Information text about the site */}
                <div className="infoText">
                    Welcome to our movie database. We provide comprehensive information about your favorite movies, including cast, crew, and detailed reviews. Our goal is to be your go-to source for movie information and entertainment.
                    Whether you're looking for the latest releases or classic films, we've got you covered. Stay connected with us on social media for updates and exclusive content.
                </div>
                {/* Social media icons */}
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF /> {/* Facebook icon */}
                    </span>
                    <span className="icon">
                        <FaInstagram /> {/* Instagram icon */}
                    </span>
                    <span className="icon">
                        <FaTwitter /> {/* Twitter icon */}
                    </span>
                    <span className="icon">
                        <FaLinkedin /> {/* LinkedIn icon */}
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};


export default Footer;
