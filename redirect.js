const express = require('express');
const app = express();

app.get('/old-page', (req, res) => {
    res.redirect('/new-page');
});

app.get('/new-page', (req, res) => {
    res.send('This is the new page!');
});

app.listen(3000, () => console.log('Server running on port http://localhost:3000'));