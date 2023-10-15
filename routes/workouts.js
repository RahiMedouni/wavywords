const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const multer = require("multer");
const uploadImage = multer({ dest: "uploads/images" }); // Use the same destination as configured above
const uploadPDF = multer({ dest: "uploads/pdfs" });

const router = express.Router();

// Apply requireAuth middleware to protect routes
router.use(requireAuth);

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout with picture and PDF upload
router.post("/", async (req, res) => {
  try {
    await uploadImage.single("picture")(req, res);
    await uploadPDF.single("pdf")(req, res);
    createWorkout(req, res);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
