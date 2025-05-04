const { Schema, model } = require("mongoose");

const currencyTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const currencyTypeModel = model("currency_type", currencyTypeSchema);

module.exports = currencyTypeModel;
