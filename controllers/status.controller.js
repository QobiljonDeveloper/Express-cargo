const statusModel = require("../models/status.model");

async function findAll(req, res) {
  try {
    const statuses = await statusModel.find();
    res.status(200).send({ data: statuses });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    const status = await statusModel.create(req.body);
    res.status(201).send({ data: status });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    const updated = await statusModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send({ data: updated });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  try {
    await statusModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted status" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, create, update, remove };
