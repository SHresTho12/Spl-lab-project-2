module.exports = (sequelize, DataTypes) => {
  const childrenPlayGames = sequelize.define("childrenPlayGames", {
    CPGID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GameID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GameScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return childrenPlayGames;
};
