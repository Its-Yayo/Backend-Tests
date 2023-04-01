const express = require('express');
const path = require('path');

const app = express();
const port = 8000;
const ip = '127.0.0.1';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.status(200);
    res.type('html');
    app.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});
