const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// Set Permissions-Policy header
app.use((req, res, next) => {
  res.setHeader(
    "Permissions-Policy",
    'payment=(self "https://secure.stitch.money")'
  );
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none';");
  next();
});

// Serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
