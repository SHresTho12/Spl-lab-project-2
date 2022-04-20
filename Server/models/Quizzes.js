module.exports = (sequelize, DataTypes) => {
  const Quizzes = sequelize.define("Quizzes", {
    quizID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quizScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HighestScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    AverageScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Quizzes;
};
