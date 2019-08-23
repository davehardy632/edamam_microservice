'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodType: {
        type: Sequelize.STRING
      },
      recipeName: {
        type: Sequelize.STRING
      },
      thumbnailImg: {
        type: Sequelize.STRING
      },
      ingredientNum: {
        type: Sequelize.INTEGER
      },
      prepTime: {
        type: Sequelize.FLOAT
      },
      ingredients: {
        type: Sequelize.TEXT
      },
      calories: {
        type: Sequelize.FLOAT
      },
      url: {
        type: Sequelize.STRING
      },
      dietLabel: {
        type: Sequelize.STRING
      },
      healthLabel: {
        type: Sequelize.STRING
      },
      cautions: {
        type: Sequelize.STRING
      },
      fat: {
        type: Sequelize.FLOAT
      },
      carbs: {
        type: Sequelize.FLOAT
      },
      protein: {
        type: Sequelize.FLOAT
      },
      yield: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
