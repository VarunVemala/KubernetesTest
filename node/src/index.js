const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from index.js!!');
});

var things = require('./things.js');
app.use('/things', things);

const port = process.env.PORT || 1236;
app.listen(port, () => console.log(`Listening on port: ${port}`));
