// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model.js');

const DB_NAME = 'lab-express-drones';

//connecting to our database
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];