const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index.routes");

dotenv.config();

let PORT = process.env.PORT || 3030;

let app = express();

app.use(express.json());

app.use("/api", mainRouter);

async function bootstrapt(params) {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    app.listen(PORT, () => {
      console.log(`Server is running at: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

bootstrapt();
