// Import React hooks: useEffect for side effects and useState for state management
import { useEffect, useState } from "react";
// Import function to fetch data from the API
import { fetchDataFromApi } from "../utils/api";

// Custom hook to fetch data and manage loading and error states
const useFetch = (url) => {
    // State to store the fetched data
    const [data, setData] = useState(null);
    // State to track loading status
    const [loading, setLoading] = useState(null);
    // State to store any error messages
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the URL changes
    useEffect(() => {
        // Set loading state and reset data and error states
        setLoading("loading...");
        setData(null);
        setError(null);

        // Fetch data from API
        fetchDataFromApi(url)
            .then((res) => {
                // On successful data fetch, update states
                setLoading(false); // Loading is complete
                setData(res); // Set the fetched data
            })
            .catch((err) => {
                // On error, update states
                setLoading(false); // Loading is complete
                setError("Something went wrong!"); // Set the error message
            });
    }, [url]); // Dependency array: fetch data whenever the URL changes

    // Return data, loading status, and error message
    return { data, loading, error };
};

// Export the custom hook 
export default useFetch;
