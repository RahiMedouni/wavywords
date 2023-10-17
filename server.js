require("dotenv").config();
var path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// app.use("/uploads", express.static("uploads"));

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Add this route for serving PDF files
// app.get("/api/workouts/:id/pdf", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const workout = await Workout.findById(id);

//     if (!workout || !workout.pdf) {
//       return res.status(404).json({ error: "Workout or PDF not found" });
//     }

//     const pdfFileName = workout.pdf;
//     const pdfFilePath = path.join(__dirname, "uploads", pdfFileName);

//     res.sendFile(pdfFilePath);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// connect to the database
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen to requests
    app.listen(process.env.PORT, () => {
      console.log(
        "connected to the database & listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
