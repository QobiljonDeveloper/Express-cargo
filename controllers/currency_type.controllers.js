const currencyTypeModel = require("../models/currency_type.model");

async function findAll(req, res) {
  try {
    const currencies = await currencyTypeModel.find();
    res.status(200).send({ data: currencies });
  } catch (error) {
    console.error(error.message);
  }
}

async function findOne(req, res) {
  try {
    const { id } = req.params;
    const currency = await currencyTypeModel.findById(id);
    res.status(200).send({ data: currency });
  } catch (error) {
    console.error(error.message);
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const newCurrency = await currencyTypeModel.create(data);
    res.status(201).send({ data: newCurrency });
  } catch (error) {
    console.error(error.message);
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    const updated = await currencyTypeModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send({ data: updated });
  } catch (error) {
    console.error(error.message);
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    await currencyTypeModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Currency deleted" });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
