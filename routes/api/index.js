const router = require("express").Router();
const noteRoutes = require("./notes");

// Note routes
router.use("/notes", noteRoutes);

module.exports = router;
