const express = require("express");
const app = express();

app.use(express.json());

// ★ CORS完全許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

let lastBallTime = null;

app.post("/ball", (req, res) => {
  lastBallTime = Date.now();
  res.json({ status: "ok" });
});

app.get("/ball", (req, res) => {
  res.json({ time: lastBallTime });
});

app.get("/", (req, res) => {
  res.send("Strike API Running");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});
