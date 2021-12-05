const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB(); // connect database - MongoDB
app.use(express.json({ extended: false })); // init middleware - it allows us to get data in req.body in related routes

app.get('/', (req, res) =>
  res.send('API Running (made by Ranjan Kumar Mandal)...')
);
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
