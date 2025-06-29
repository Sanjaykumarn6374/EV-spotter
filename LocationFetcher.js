import React, { useState } from 'react';

const LocationFetcher = ({ onLocationFetched }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;

                    setLatitude(lat);
                    setLongitude(long);

                    // Pass the location data back to Search.js
                    if (onLocationFetched) {
                        onLocationFetched({ lat, long });
                    }

                    const postData = { lat, long };

                    console.log("Sending data:", postData);

                    try {
                        const response = await fetch('http://localhost:3000/location', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(postData)
                        });

                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const data = await response.json();
                        console.log("Response:", data);
                    } catch (error) {
                        console.error("Error in POST request:", error);
                    }
                },
                (error) => {
                    console.error("Error fetching location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div>
            <button className="btn" onClick={getLocation}>📍 Get Location</button>
            {latitude !== null && longitude !== null && (
                <p>Latitude: {latitude}, Longitude: {longitude}</p>
            )}
        </div>
    );
};

export default LocationFetcher;
