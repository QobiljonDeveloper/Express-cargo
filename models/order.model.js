const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    product_link: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    summa: {
      type: Number,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    client_id: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: true,
    },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "currency_type",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
