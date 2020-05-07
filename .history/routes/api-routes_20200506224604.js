const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts/:id", (req, res) => {
  const { type, name, duration, distance, weight, sets, reps } = req.body;
  let exercise = {
    type: type,
    name: name,
    duration: duration
  };
  if (!sets) {
    exercise.duration = duration;
  } else {
    exercise.weight = weight;
    exercise.sets = sets;
    exercise.reps = reps;
  }

  Workout.update({ _id: mongoose.ObjectId(req.params.id)}, exercise)
    .then(data => { res.json(data) })
    .catch(err => { res.status(400).error(err) });
})

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  console.log(req);
  // Workout.find({ "day": {"$gte": new Date(), "$lte": }})
});

module.exports = router;
