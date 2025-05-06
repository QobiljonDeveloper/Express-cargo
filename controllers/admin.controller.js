const adminModel = require("../models/admin.model");

async function findAll(req, res) {
  try {
    const admins = await adminModel.find();
    res.status(200).send({ data: admins });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  try {
    const admin = await adminModel.create(req.body);
    res.status(201).send({ data: admin });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  try {
    const updated = await adminModel.findByIdAndUpdate(
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
    await adminModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Deleted admin" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { findAll, create, update, remove };
