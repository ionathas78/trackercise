const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: "Day is required"
  },
  exercises: {
    type: Array,
    required: "Enter a name for workout"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
