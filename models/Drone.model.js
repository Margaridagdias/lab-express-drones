const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const droneSchema = new Schema(
  {
    name: String,
    propellers: { type: Number, max: 4 },
    maxSpeed: { type: Number, max: 18 }
  },
  {
  timestamps: true
}
)

module.exports = model('Drone', droneSchema);

