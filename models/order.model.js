const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    product_link: {
      type: String,
      required: [true, "Product link is required"],
      match: [
        /^https?:\/\/[^\s]+$/,
        "Please provide a valid URL for the product",
      ],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Quantity must be at least 1"],
    },
    summa: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Summa cannot be negative"],
    },
    truck: {
      type: String,
      required: [true, "Truck is required"],
      minlength: [3, "Truck info should be at least 3 characters"],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      minlength: [5, "Description should be at least 5 characters"],
    },
    client_id: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: [true, "Client ID is required"],
    },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "currency_type",
      required: [true, "Currency type ID is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
