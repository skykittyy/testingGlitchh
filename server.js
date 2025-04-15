const express = require("express");
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Logging setup
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for Climate Crisis
app.get("/climate-change", (req, res) => {
  res.redirect('https://github.com/sdelapena123/climate-change');
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect('https://github.com/skykittyy/typesetting');
});


// Route for Four Sorting Algorithms
app.get("/Four-Sorting-Algorithms", (req, res) => {
  res.redirect('https://github.com/skykittyy/Four-Sorting-Algorithms');
});

// // Route for Two
// app.get('/two', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'two.html'));
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
