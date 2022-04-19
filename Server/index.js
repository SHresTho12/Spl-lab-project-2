const express = require("express"); //import ihe express
const cors = require("cors");
const app = express(); //create a instance of the express app
app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
const profileRouter = require("./routes/profile");
app.use("/profile", profileRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on the port : 3001"); //initialize the server to run on the port number 3001
  });
});
