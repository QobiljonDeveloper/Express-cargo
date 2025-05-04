const clientModel = require("../models/user.model");

async function findAll(req, res) {
  let { limit, offset } = req.query;

  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let clients = await clientModel
      .find({})
      .populate({
        path: "orders",
        populate: {
          path: "currency_type_id",
          select: "name description -_id",
        },
        select: "quantity currency_type_id -_id",
      })
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: clients });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;

  try {
    let client = await clientModel.findById(id);
    res.status(200).send({ data: client });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let client = await clientModel.create(data);

    res.status(201).send({ data: client });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateClient = await clientModel.findByIdAndUpdate(id, data);
    res.status(200).send({ data: updateClient });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await clientModel.findByIdAndDelete(id);

    res.status(200).send({ message: "Deleted User" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  remove,
  update,
};
