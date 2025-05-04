const { Router } = require("express");
const clientsRouter = require("./clients.routes");
const ordersRouter = require("./order.routes");
const currencyTypeRouter = require("./currency_type.routes");

const router = Router();

router.use("/clients", clientsRouter);
router.use("/order", ordersRouter);
router.use("/currenytype", currencyTypeRouter);

module.exports = router;
