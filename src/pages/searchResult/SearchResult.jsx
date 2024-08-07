import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";

const SearchResult = () => {
    const [data, setData] = useState(null); // State to hold search results
    const [pageNum, setPageNum] = useState(1); // State to track current page number
    const [loading, setLoading] = useState(false); // State to track loading status
    const { query } = useParams(); // Extract search query from URL parameters

    // Function to fetch initial search results
    const fetchInitialData = () => {
        setLoading(true); // Set loading to true before fetching data
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                setData(res); // Set fetched data to state
                setPageNum((prev) => prev + 1); // Increment page number for next request
                setLoading(false); // Set loading to false after fetching data
            }
        );
    };

    // Function to fetch next page of search results
    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results], // Append new results to existing data
                    });
                } else {
                    setData(res); // Set data if it's the first fetch
                }
                setPageNum((prev) => prev + 1); // Increment page number for next request
            }
        );
    };

    // Effect to fetch data when query changes
    useEffect(() => {
        setPageNum(1); // Reset page number to 1 for new queries
        fetchInitialData(); // Fetch initial data based on new query
    }, [query]);

    return (
        <div className="searchResultsPage">
            {/* Show spinner while loading */}
            {loading && <Spinner initial={true} />}

            {/* Render content when not loading */}
            {!loading && (
                <ContentWrapper>
                    {/* Check if there are results */}
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${data?.total_results > 1
                                        ? "results"
                                        : "result"
                                    } of '${query}'`}
                            </div>
                            {/* InfiniteScroll component to load more results as user scrolls */}
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []} // Length of current results
                                next={fetchNextPageData} // Function to fetch next page
                                hasMore={pageNum <= data?.total_pages} // Check if more pages are available
                                loader={<Spinner />} // Loader component to show while fetching more results
                            >
                                {data?.results.map((item, index) => {
                                    if (item.media_type === "person") return; // Skip items with media_type "person"
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            fromSearch={true} // Flag to indicate search results
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        // Show message if no results found
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
};

export default SearchResult;
