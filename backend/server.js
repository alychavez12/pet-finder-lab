
///////////////////////////////
// Dependencies
////////////////////////////////
const mongoose = require('mongoose');
const express = require('express');
// create application object
const app = express();

///////////////////////////////
// Application Settings
////////////////////////////////
require('dotenv').config();

const { PORT = 5001, DATABASE_URL } = process.env;
///////////////////////////////
// Database Connection
////////////////////////////////
mongoose.connect(DATABASE_URL);
// Mongo connection Events
mongoose.connection
  .on('open', () => console.log('You are connected to MongoDB'))
  .on('close', () => console.log('You are disconnected from MongoDB'))
  .on('error', (error) => console.log(`MongoDB Error: ${error.message}`));

///////////////////////////////
// Models
////////////////////////////////


///////////////////////////////
// Mount Middleware
////////////////////////////////

app.use(express.json()); 

///////////////////////////////
// Mount Routes
////////////////////////////////

app.use('/petFinder', petFinderRoutes);

///////////////////////////////
// Tell the app to listen
////////////////////////////////
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});