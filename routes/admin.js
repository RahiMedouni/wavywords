// adminRoutes.js
const express = require("express");
const adminControllers = require("../controllers/adminControllers");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Admin dashboard route
router.get("/dashboard", requireAuth, (req, res) => {
  // Ensure the user is an admin
  if (req.user.role === "admin") {
    adminControllers.getAdminDashboard(req, res);
  } else {
    res
      .status(403)
      .json({ error: "Access denied. Only admins can access this route." });
  }
});

// Admin signup route
router.post("/signup", adminControllers.signupAdmin);

module.exports = router;
