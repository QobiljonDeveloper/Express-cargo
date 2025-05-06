const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name should be at least 3 characters"],
    },
    user_name: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [3, "Username should be at least 3 characters"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password should be at least 6 characters"],
    },
    phone_number: {
      type: String,
      match: [/^\+?\d{1,15}$/, "Please enter a valid phone number"],
    },
    email: {
      type: String,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    tg_link: {
      type: String,
      match: [
        /^https:\/\/t\.me\/[a-zA-Z0-9_]+$/,
        "Please provide a valid Telegram link",
      ],
    },
    token: String,
    is_creator: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
  },
  { timestamps: true }
);

module.exports = model("admin", adminSchema);
