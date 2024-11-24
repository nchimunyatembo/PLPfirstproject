//import
const express = require('express');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();

//set-up middleware
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/route', Routes)

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'form.html'));
});

app.get('/search', (request, response) => {
    response.sendFile(path.join(__dirname, 'search.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`)
});