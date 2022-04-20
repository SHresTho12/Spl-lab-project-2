module.exports = (sequelize, DataTypes) => {
  const childrenInfo = sequelize.define("childrenInfo", {
    Uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Problem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return childrenInfo;
};
