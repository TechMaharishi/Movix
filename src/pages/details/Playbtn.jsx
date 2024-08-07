// Define a functional component for the PlayIcon
export const PlayIcon = () => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="80px" // Width of the SVG
            height="80px" // Height of the SVG
            viewBox="0 0 213.7 213.7" // Viewbox dimensions
            enableBackground="new 0 0 213.7 213.7" // Enable background for the SVG
            xmlSpace="preserve" // Preserve white space
        >
            {/* Draw a triangle (play button) */}
            <polygon
                className="triangle"
                fill="none" // No fill color
                strokeWidth="7" // Width of the stroke
                strokeLinecap="round" // Round end of stroke
                strokeLinejoin="round" // Round join of stroke
                strokeMiterlimit="10" // Miter limit for the stroke
                points="73.5,62.5 148.5,105.8 73.5,149.1" // Points of the triangle
            ></polygon>

            {/* Draw a circle around the triangle */}
            <circle
                className="circle"
                fill="none" // No fill color
                strokeWidth="7" // Width of the stroke
                strokeLinecap="round" // Round end of stroke
                strokeLinejoin="round" // Round join of stroke
                strokeMiterlimit="10" // Miter limit for the stroke
                cx="106.8" // X-coordinate of the circle's center
                cy="106.8" // Y-coordinate of the circle's center
                r="103.3" // Radius of the circle
            ></circle>
        </svg>
    );
};
