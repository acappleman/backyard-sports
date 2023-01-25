const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sport extends Model {}

Sport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sport",
  }
);

module.exports = Sport;