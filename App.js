import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import StationList from './components/StationList';
import Reservation from './components/Reservation';
import Payment from './components/Payment';  // Import Payment Component
import './index.css';

const App = () => {
    const stationsData = [
        { id: 1, name: "EV Station A", location: "Downtown", isBusy: false },
        { id: 2, name: "EV Station B", location: "City Center", isBusy: true },
        { id: 3, name: "EV Station C", location: "Near Mall", isBusy: false }
    ];
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<Search stations={stationsData} />} />
                <Route path="/stations" element={<StationList stations={stationsData} />} />
                <Route path="/reserve/:stationId" element={<Reservation />} />
                <Route path="/payment" element={<Payment />} />  {/* New Payment Route */}
            </Routes>
        </Router>
    );
};

export default App;
