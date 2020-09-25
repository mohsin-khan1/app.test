require("dotenv").config();

const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const http = require("http").Server(app);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Test Route
app.get("/api/hello", (req, res) => {
    res.json({ success: true, data: "Hello From Server!" });
});

const api = {
    rawText: require("./routes/rawText"),
};

app.use("/api", api.rawText);


http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})