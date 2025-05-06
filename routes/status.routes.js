const { Router } = require("express");
const {
  findAll,
  create,
  update,
  remove,
} = require("../controllers/status.controller");

const router = Router();

router.get("/", findAll);
router.post("/create", create);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
