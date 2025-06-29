
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to EV Charging Station Spotter</h1>
            <Link to="/login" className="btn">Get Started</Link>
        </div>
    );
};

export default Home;