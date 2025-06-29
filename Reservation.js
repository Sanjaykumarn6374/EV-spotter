import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css';

const Reservation = () => {
    const { stationId } = useParams();
    const navigate = useNavigate();
    
    // Map of station IDs to names (Modify this according to your data)
    const stationNames = {
        '1': 'EV Station Alpha',
        '2': 'EV Station Beta',
        '3': 'EV Station Gamma'
    };

    const stationName = stationNames[stationId] || `Station ${stationId}`;

    // State for selected time slot
    const [timeSlot, setTimeSlot] = useState('');

    const handleReservation = () => {
        if (!timeSlot) {
            alert("Please select a time slot before proceeding.");
            return;
        }

        // Store reservation details
        sessionStorage.setItem('reservationTime', timeSlot);
        sessionStorage.setItem('stationName', stationName);

        // Navigate to Payment page
        navigate('/payment');
    };

    return (
        <div className="reservation-container">
            <h2>Reserve {stationName}</h2>

            {/* Time Slot Selection */}
            <label>Select a Time Slot:</label>
            <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                <option value="">-- Choose a Time Slot --</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
            </select>

            <button className="btn" onClick={handleReservation}>Confirm Reservation</button>
        </div>
    );
};

export default Reservation;
