module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    Uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Users;
};
