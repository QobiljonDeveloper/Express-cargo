const { Router } = require("express");
const clientsRouter = require("./clients.routes");
const ordersRouter = require("./order.routes");
const currencyTypeRouter = require("./currency_type.routes");
const adminRouter = require("./admin.routes");
const operationRouter = require("./operation.routes");
const statusRouter = require("./status.routes");

const router = Router();

router.use("/clients", clientsRouter);
router.use("/order", ordersRouter);
router.use("/currenytype", currencyTypeRouter);
router.use("/admin", adminRouter);
router.use("/operation", operationRouter);
router.use("/status", statusRouter);

module.exports = router;
