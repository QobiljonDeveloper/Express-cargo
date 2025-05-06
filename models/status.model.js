const { Schema, model } = require("mongoose");

const statusSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Status name is required"],
      minlength: [3, "Status name should be at least 3 characters"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
  },
  { timestamps: true }
);

module.exports = model("status", statusSchema);
