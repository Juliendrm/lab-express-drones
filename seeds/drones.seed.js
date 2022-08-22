// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  {
    name: "Alpha",
    propellers: 4,
    maxSpeed: 140,
  },
  {
    name: "Tango",
    propellers: 3,
    maxSpeed: 180,
  },
  {
    name: "Delta",
    propellers: 5,
    maxSpeed: 300,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
