const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  TrainId: String,
  TrainName: String,
  TrainStartLocation: String,
  TrainDestinationLocation: String,
  TrainCapacity: Number,
  NoOfBoggies: Number,
  TicketPrice: Number,
});

module.exports = mongoose.model("trains", trainSchema);
