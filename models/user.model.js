const { Schema, model } = require("mongoose");

let clientSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "fullName is required"],
    },
    phone_number: {
      type: String,
      required: [true, "phone number is required"],
      maxLength: [15, "Max length 15"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    location: {
      type: String,
      required: [true, "location is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

let clientModel = model("client", clientSchema);

module.exports = clientModel;
