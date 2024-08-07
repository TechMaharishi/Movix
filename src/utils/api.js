// Import the axios library for making HTTP requests
import axios from "axios";

// Define the base URL for the TMDB API
const BASE_URL = "https://api.themoviedb.org/3";

// Retrieve the TMDB API token from environment variables
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Define the headers for the HTTP request, including the authorization token
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

// Function to fetch data from the API
export const fetchDataFromApi = async (url, params) => {
    try {
        // Make a GET request to the API with the provided URL and parameters
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        // Return the data received from the API
        return data;
    } catch (err) {
        // Log any errors that occur during the request
        console.log(err);
        // Return the error
        return err;
    }
};
