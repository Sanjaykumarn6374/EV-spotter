🔋 EV Charging Station Spotter
📝 Project Description
EV Charging Station Spotter is a full-stack web application that enables electric vehicle (EV) users to find nearby charging stations based on their real-time geographic location and travel range. It integrates:

📍 Geolocation

🧮 Haversine distance calculation

🤖 Machine Learning-based predictions

🔄 Live availability tracking

The system helps users select the optimal charging station nearby.

⚙️ Key Features
🌍 Real-Time Location-Based Search
Using latitude/longitude and the Haversine formula.

🧠 Charging Station Status Prediction
Utilizes camera input + ML, data stored in a SQL database.

🗺️ Google Maps Navigation
Users can get directions to their selected charging station.

📲 Reservation System
Reserve a charging slot in advance.

🔐 User Authentication
Secure signup/login using SQL.

🧰 Technology Stack
| Layer     | Technology                      |
| --------- | ------------------------------- |
| Frontend  | React.js, CSS                   |
| Backend   | Node.js, Express.js             |
| Database  | SQL (MySQL/PostgreSQL)          |
| ML Server | Python + Camera Stream + YOLOv8 |
| APIs      | Google Maps, HTML Geolocation   |
| Tunneling | Cloudflare Tunnel               |


🛰️ Secure Access via Cloudflare Tunnel

📁 Project Structure

| Path                                         | Description                      |
| -------------------------------------------- | -------------------------------- |
| `EV-CHARGING-STATION-SPOTTER/`               | Root project folder              |
| `.dist/`                                     | Build or distribution files      |
| `backend/`                                   | Backend (Node.js + Express)      |
| `backend/node_modules/`                      | Backend dependencies             |
| `backend/package-lock.json`                  | Backend lock file                |
| `backend/package.json`                       | Backend project info             |
| `backend/server.js`                          | Main backend server file         |
| `database/`                                  | SQL database folder              |
| `database/schema.sql`                        | SQL schema for charging stations |
| `frontend/`                                  | Frontend (React)                 |
| `frontend/node_modules/`                     | Frontend dependencies            |
| `frontend/public/`                           | Static files                     |
| `frontend/src/`                              | Source code                      |
| `frontend/src/components/`                   | React components                 |
| `frontend/src/components/Home.js`            | Homepage UI                      |
| `frontend/src/components/LocationFetcher.js` | Location fetcher logic           |
| `frontend/src/components/Login.js`           | Login form                       |
| `frontend/src/components/Payment.js`         | Payment page                     |
| `frontend/src/components/Reservation.js`     | Booking component                |
| `frontend/src/components/Search.js`          | Search logic for stations        |
| `frontend/src/components/Signup.js`          | Signup form                      |
| `frontend/src/components/Station.js`         | Station detail component         |
| `frontend/src/components/StationList.js`     | Station list UI                  |
| `frontend/src/styles/`                       | CSS styles                       |
| `frontend/src/styles/payment.css`            | Styling for payment page         |
| `frontend/src/App.css`                       | Global styles                    |
| `frontend/src/App.js`                        | Root React component             |
| `frontend/src/App.test.js`                   | App testing file                 |
| `frontend/src/index.css`                     | Entry CSS                        |
| `frontend/src/index.js`                      | React entry point                |
| `frontend/src/logo.svg`                      | Logo asset                       |
| `frontend/src/reportWebVitals.js`            | Performance metrics              |
| `frontend/src/setupTests.js`                 | Test setup                       |
| `.env`                                       | Environment variables            |
| `.gitignore`                                 | Git ignored files                |
| `cloudflared.exe`                            | Cloudflare Tunnel binary         |
| `config.yml`                                 | Cloudflare config                |
| `package.json`                               | Root dependencies                |
| `package-lock.json`                          | Root lock file                   |
| `README.md`                                  | Project documentation            |
