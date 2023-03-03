const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./database/connection");
const route = require("./Routers/route");
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 8080;

app.use("/api", route);

connectDB()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to ${port}`);
      });
    } catch (error) {
      console.log("Cant connect to server");
    }
  })
  .catch((error) => console.log("Invalid database connection"));
