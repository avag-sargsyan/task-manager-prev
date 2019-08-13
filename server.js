const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

db.authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('Index'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));