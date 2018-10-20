const router = require("express").Router();
const favsController = require("../../controllers/favsController");

// Matches with "/api/favs"
router.route("/")
  .get(favsController.findAll)
  .post(favsController.create);

// Matches with "/api/favs/:id"
router
  .route("/:id")
  .get(favsController.findById)
  .put(favsController.update)
  .delete(favsController.remove);

module.exports = router;