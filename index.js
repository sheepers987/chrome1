const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Import and use the user routes
const userRouter = require('./routes/users');
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
