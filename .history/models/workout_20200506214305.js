const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    enum: ['resistance', 'cardio'],
    required: "Workout type must be 'resistance' or 'cardio'"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  duration: {
    type: Number,
    min: [0, "Duration cannot be a negative number"],
    required: "Enter an amount"
  },
  distance: {
    type: Number,
    min: [0, "Distance cannot be a negative number"]
  },
  weight: {
    type: Number,
    min: [0, "Weight cannot be a negative number"]
  },
  reps: {
    type: Number,
    min: [1, "Reps cannot be less than 1"]
  },
  sets: {
    type: Number,
    min: [1, "Sets cannot be less than 1"]
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
