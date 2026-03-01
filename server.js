const express = require('express');
const app = express();
app.use(express.json());

let lastBallEvent = null;

app.post('/ball', (req, res) => {
    lastBallEvent = Date.now();
    res.sendStatus(200);
});

app.get('/ball', (req, res) => {
    res.json({ time: lastBallEvent });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API running"));
