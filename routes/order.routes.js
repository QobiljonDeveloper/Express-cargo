const { Router } = require("express");
const {
  findAll,
  findOne,
  create,
  remove,
  update,
} = require("../controllers/order.controllers");

let router = Router();

router.get("/", findAll);
router.post("/create", create);
router.delete("/:id", remove);
router.patch("/:id", update);
router.get("/:id", findOne);

module.exports = router;
