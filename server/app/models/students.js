"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      students.belongsTo(models.groups, {
        foreignKey: "group_id",
      });

      students.hasMany(models.indiv_scores, {
        foreignKey: "student_id",
        as: "student",
      });
    }
  }
  students.init(
    {
      last_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      group_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "students",
    }
  );
  return students;
};
