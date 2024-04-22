const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

// Serve static files from the 'dist' directory
app.use(
  '/themes/generic.js',
  express.static(path.join(__dirname, '../app/dist/themes/generic.js'))
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
