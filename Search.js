import React, { useState, useEffect } from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import Station from './Station';
import LocationFetcher from './LocationFetcher';

const Search = ({ stations }) => {
    const [search, setSearch] = useState('');
    const [foundStation, setFoundStation] = useState(null);
    const [data, setData] = useState(null);
    const [userLocation, setUserLocation] = useState(null); // Store user's location

    // Fetch API data
    useEffect(() => {
        fetch('http://localhost:3000/items') // Replace with your actual API URL
            .then(response => response.json()) 
            .then(json => setData(json)) 
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Handle search
    const handleSearch = () => {
        console.log("Searching for " + search);
        const station = stations.find(station => 
            station.name.toLowerCase().includes(search.toLowerCase())
        );
        setFoundStation(station);
    };

    // Callback function to receive the location
    const handleLocationFetched = (location) => {
        setUserLocation(location);
    };

    return (
        <div className="search-container">
            <h1 className="search-title">🔍 Find Your EV Charging Station</h1>

            {/* Pass the callback function to LocationFetcher */}
            <LocationFetcher onLocationFetched={handleLocationFetched} />

            {/* Display Latitude and Longitude */}
            {userLocation && (
                <p>📍 Your Location: {userLocation.lat}, {userLocation.long}</p>
            )}

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter station name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn" onClick={handleSearch}>Search</button>
            </div>

            <Link to="/stations" className="btn all-stations">View All Stations</Link>

            {/* Nearby Station */}
            <h2 className="section-title">🚗 Nearby Stations</h2>
            {data && <Station station={data[0]} />}

            {/* Search Results */}
            {foundStation ? (
                <>
                    <h2 className="section-title">🔹 Search Result</h2>
                    <Station station={foundStation} />
                </>
            ) : (
                search && <p className="not-found">⚠️ No station found</p>
            )}
        </div>
    );
};

export default Search;
