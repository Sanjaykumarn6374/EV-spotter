const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',    // Change if using a remote server
    user: 'root',         // Your MySQL username
    password: 'sanjay9865',         // Your MySQL password
    database: 'evlocator'  // Your database name
});



app.use(express.json());
app.use(cors());

function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in kilometers

    // Convert degrees to radians
    const toRad = (angle) => angle * (Math.PI / 180);

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in km
}

let items = [
    { id: 1, name: "EV Station A", location: "Downtown", isBusy: false }
    // { id: 2, name: "EV Station B", location: "City Center", isBusy: true },
    // { id: 3, name: "EV Station C", location: "Near Mall", isBusy: false }
]



// Get all items
app.get('/items', (req, res) => {
    res.json(items);
    console.log("Items Requested and Displayed!!")
});

// Get single item
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("Item not found");
    res.json(item);
});

// Create new item
app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
    console.log(items)
});




// Route to insert user data
app.post('/signup', (req, res) => {
    console.log(req.body);
    const { name, phone, city, username, password } = req.body;

    if (!name || !phone || !city || !username || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = 'INSERT INTO userdata (name, phone, city, username, password) VALUES (?, ?, ?, ?, ?)';
    const values = [name, phone, city, username, password];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'User added successfully', userId: result.insertId });
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)

    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    const sql = "SELECT * FROM userdata WHERE username = ? AND password = ?";
    
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (results.length > 0) {
            res.json({ response: "yes", user: results[0] }); // Login successful
        } else {
            res.json({ response: "no" }); // Login failed
        }
    });
});


// Create new item
app.post('/location', (req, res) => {
    console.log(req.body)
    console.log("LATITUDE : ", req.body.lat)
    console.log("LONGITUDE : ", req.body.long)
    const distance = haversine(req.body.lat, req.body.long, 11.03898972323163, 76.99759852437414); // Bangalore to Delhi
    console.log(`Distance: ${distance.toFixed(2)} km`);
});

// Update an item
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("Item not found");
    item.name = req.body.name;
    res.json(item);
});

// Delete an item
app.delete('/items/:id', (req, res) => {
    items = items.filter(i => i.id !== parseInt(req.params.id));
    res.send("Item deleted");
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
