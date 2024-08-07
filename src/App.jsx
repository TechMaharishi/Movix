// Import necessary hooks and components from React and React Router DOM
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import the fetchDataFromApi function from the API utility file
import { fetchDataFromApi } from "./utils/api";

// Import hooks and actions from Redux
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

// Import the components for the different parts of the application
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
    // Initialize dispatch hook from Redux
    const dispatch = useDispatch();
    // Get the 'url' state from the Redux store
    const { url } = useSelector((state) => state.home);
    console.log(url);

    // useEffect hook to run functions when the component mounts
    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);

    // Function to fetch API configuration
    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            console.log(res);

            // Create URL configuration object for images
            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            // Dispatch action to store the API configuration in Redux
            dispatch(getApiConfiguration(url));
        });
    };

    // Function to fetch genres from the API
    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        // Create promises for fetching genres of TV and movie
        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        // Await all promises and handle the data
        const data = await Promise.all(promises);
        console.log(data);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        // Dispatch action to store genres in Redux
        dispatch(getGenres(allGenres));
    };

    return (
        // BrowserRouter to handle routing within the application
        <BrowserRouter>
            {/* Render the header component */}
            <Header />
            {/* Define the routes for the application */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            {/* Render the footer component */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
