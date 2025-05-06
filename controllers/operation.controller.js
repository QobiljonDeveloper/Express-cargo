const operationModel = require("../models/operation.model");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? parseInt(limit) : 10;
    offset = offset ? parseInt(offset) : 1;

    const operations = await operationModel
      .find()
      .populate("order_id", "product_link quantity summa")
      .populate("status_id", "name description")
      .populate("admin_id", "full_name user_name")
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: operations });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Server error" });
  }
}

async function findOne(req, res) {
  const { id } = req.params;
  try {
    const operation = await operationModel
      .findById(id)
      .populate("order_id")
      .populate("status_id")
      .populate("admin_id");

    if (!operation) {
      return res.status(404).send({ message: "Operation not found" });
    }

    res.status(200).send({ data: operation });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Server error" });
  }
}

async function create(req, res) {
  try {
    const newOperation = await operationModel.create(req.body);
    res.status(201).send({ data: newOperation });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: "Invalid input data" });
  }
}

async function update(req, res) {
  const { id } = req.params;
  try {
    const updatedOperation = await operationModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedOperation) {
      return res.status(404).send({ message: "Operation not found" });
    }

    res.status(200).send({ data: updatedOperation });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: "Invalid input data" });
  }
}

async function remove(req, res) {
  const { id } = req.params;
  try {
    const deleted = await operationModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({ message: "Operation not found" });
    }

    res.status(200).send({ message: "Deleted operation" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "Server error" });
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
