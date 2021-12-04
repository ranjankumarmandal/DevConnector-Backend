const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB(); // connect database - MongoDB
app.get('/', (req, res) =>
  res.send('API Running (made by Ranjan Kumar Mandal)...')
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
