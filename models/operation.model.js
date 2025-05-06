const { Schema, model, Types } = require("mongoose");

const operationSchema = new Schema(
  {
    order_id: {
      type: Types.ObjectId,
      ref: "order",
      required: [true, "Order ID is required"],
    },
    status_id: {
      type: Types.ObjectId,
      ref: "status",
      required: [true, "Status ID is required"],
    },
    operation_date: {
      type: Date,
      default: Date.now,
    },
    admin_id: {
      type: Types.ObjectId,
      ref: "admin",
      required: [true, "Admin ID is required"],
    },
    description: {
      type: String,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("operation", operationSchema);
