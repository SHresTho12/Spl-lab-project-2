const express = require("express"); //import ihe express
const cors = require("cors");
const app = express(); //create a instance of the express app
app.use(express.json());
app.use(cors());
const db = require("./models");

//Routers
const profileRouter = require("./routes/profile");
const quizRouter = require("./routes/quiz");
const gameRouter = require("./routes/games");
const quizTakeRouter = require("./routes/childrenTakeQuizzes");
const gamePlayRouter = require("./routes/childrenPayGames");
app.use("/profile", profileRouter);
app.use("/quiz", quizRouter);
app.use("/games", gameRouter);
app.use("/quizTaken", quizTakeRouter);
app.use("/gamesPlayed", gamePlayRouter);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on the port : 3001"); //initialize the server to run on the port number 3001
  });
});
