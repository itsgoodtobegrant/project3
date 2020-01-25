const router = require("express").Router();
const playerController = require("../../controllers/playerController");

//may need to change routes to api/player/:playerId/game/:gameId
//                             api/house/:gameId/admin/:adminName
router
  // .route("/score/:playerName")
  .route("/score/:gameId")
  //get all players with an associated gameId
  .get(playerController.findByName);
// .post(playerController.create);
// .put(playerController.update);

// Matches with "/api/player/:id" this is the id of the player
router.route("/:id").get(playerController.findById);
// .delete(playerController.remove);

// Matches with "/api/player"
router
  .route("/")
  // find all players
  .get(playerController.findAll)
  // create a new player- should take in playerName and gameId
  // .post(playerController.create)
  // .put(playerController.update)
  .delete(playerController.removeAll);

module.exports = router;
