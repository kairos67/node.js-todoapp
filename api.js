const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');

const server = app.listen(3001, () => {
    console.log('server listening on port 3001');
});

app.get('/api/users/:type', (req, res) => {
    res.send('connet');
});