const router = require("express").Router();
const mongoose = require("mongoose");
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

router.put("/api/workouts/:id", (req, res) => {
  // console.log(req);
  Workout.update({ _id: mongoose.Types.ObjectId(req.params.id)}, {$push: {exercises: req.body}})
    .then(data => { 
      console.log(data);
      res.json(data);
    })
    .catch(err => { res.status(400).error(err) });
})

router.get("/api/workouts", (req, res) => {
  Workout.find({})
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

router.get("/api/workouts/:id", (req, res) => {
  Workout.find({ _id: mongoose.ObjectId(req.params.id)})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
