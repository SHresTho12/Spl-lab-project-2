module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define("Games", {
    GameID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GameName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GameScore: {
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

  return Games;
};
