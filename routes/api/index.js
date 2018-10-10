const router = require("express").Router();
const noteRoutes = require("./notes");
const userRoutes = require("./users");


// Note routes
router.use("/notes", noteRoutes);

// User routes
router.use("/users", userRoutes);



module.exports = router;
