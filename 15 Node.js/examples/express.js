// ---------- server logic ----------

const fs = require('fs');

// connect express module
const express = require('express'),
    app = express();

const hostname = 'localhost'; // 127.0.0.1
const port = 4400;

// GET: ~/api/contacts
app.get("/api/contacts", (req, res) => {
    res.status(200).type('text').send("List of contacts!");
});

// GET: ~/api/users
app.get("/api/users", (req, res) => {

    // get user from file
    fs.readFile("data/users.json", "utf-8", (err, data) => {
        if (err)
            res.status(500).json({ error: err.message });
        else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

app.get("/api/products", (req, res) => {

    // get user from file
    fs.readFile("data/products.json", "utf-8", (err, data) => {
        if (err)
            res.status(500).json({ error: err.message });
        else {
            res.status(200).json(JSON.parse(data));
        }
    });
});

app.get('/api/users/random', (req, res) => {
    res.status(200).type('json');
    res.json({
        id: Math.floor(Math.random() * 1000),
        name: 'Eddy',
        surname: 'Gold',
        age: Math.floor(Math.random() * 120),
    });
});

// POST: ~/api/users/vlad/tymo
app.post("/api/users/:name/:surname", (req, res) => {
    // req.params - get route parameters value

    const name = req.params.name;
    const surname = req.params.surname;

    res.status(200).type('text').send(`User ${name} ${surname} was created! (route params)`);
});

// POST: ~/api/users?name=Vlad&surname=Tymo
app.post("/api/users", (req, res) => {
    // req.query - get query parameters value

    const name = req.query.name;
    const surname = req.query.surname;

    res.status(200).type('text').send(`User ${name} ${surname} was created! (query params)`);
});

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).type('text').send(`User with ID: ${id} was deleted!`);
});

// ---------------- default endpoint
app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
});

// ---------------- start server
app.listen(port, hostname, () => {
    console.log(`Server is listening http://${hostname}:${port}`);
});
