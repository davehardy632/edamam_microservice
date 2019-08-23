'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    foodType: DataTypes.STRING,
    thumbnailImg: DataTypes.STRING,
    ingredientNum: DataTypes.INTEGER,
    prepTime: DataTypes.FLOAT,
    ingredients: DataTypes.TEXT,
    calories: DataTypes.FLOAT,
    url: DataTypes.STRING,
    dietLabel: DataTypes.STRING,
    healthLabel: DataTypes.STRING,
    cautions: DataTypes.STRING,
    fat: DataTypes.FLOAT,
    carbs: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    yield: DataTypes.FLOAT
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
