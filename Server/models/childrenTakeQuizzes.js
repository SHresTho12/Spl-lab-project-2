module.exports = (sequelize, DataTypes) => {
  const childrenTakeQuizzes = sequelize.define("childrenTakeQuizzes", {
    CTQID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    QuizID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    QuizScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return childrenTakeQuizzes;
};
