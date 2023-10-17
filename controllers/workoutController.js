const Workout = require("../models/workoutModel");

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single workout
const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new workout with picture and PDF upload
const createWorkout = async (req, res) => {
  try {
    const { title, load, reps } = req.body;
    const user_id = req.user._id;

    if (
      !title ||
      !load ||
      !reps ||
      !req.files ||
      !req.files.picture ||
      !req.files.pdf
    ) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    const workout = await Workout.create({
      title,
      load,
      reps,
      user_id,
      picture: req.files.picture[0].filename,
      pdf: req.files.pdf[0].filename,
    });

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
