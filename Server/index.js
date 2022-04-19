const express = require("express"); //import ihe express

const app = express(); //create a instance of the express app

const db = require("./models");

//Routers
const profileRouter = require("./routes/profile");
app.use("/profile", profileRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on the port : 3001"); //initialize the server to run on the port number 3001
  });
});
