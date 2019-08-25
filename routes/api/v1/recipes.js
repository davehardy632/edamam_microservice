var express = require("express");
var router = express.Router();
var Recipe = require('../../../models').Recipe;

router.get("/food_search", async function(req, res, next) {
  foodType = req.url.split("=")[1]
  recipeAttributes = ["id", "foodType", "recipeName", "thumbnailImg", "ingredientNum", "prepTime", "ingredients", "calories", "url", "dietLabel", "healthLabel", "cautions", "fat", "carbs", "protein", "yield"]
  if (!foodType) {
    noArgumentError = {"message": "Missing query parameter"}
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify(noArgumentError));
  } else {
    recipes = await recipesByFoodType(foodType, recipeAttributes)
    if (recipes.length != 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(recipes));
    } else {
      invalidFoodError = {"message": "There are no recipes with that food type"}
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify(invalidFoodError));
    }
  }
});


router.get("/servings_search", async function(req, res, next) {
  servingSize = parseInt(req.url.split("=")[1])
  recipeAttributes = ["id", "foodType", "recipeName", "thumbnailImg", "ingredientNum", "prepTime", "ingredients", "calories", "url", "dietLabel", "healthLabel", "cautions", "fat", "carbs", "protein", "yield"]
  if (!servingSize) {
    noArgumentError = {"message": "Missing query parameter"}
    res.setHeader("Content-Type", "application/json");
    res.status(404).send(JSON.stringify(noArgumentError));
  } else {
    recipes = await recipesByServingSize(servingSize, recipeAttributes)
    if (recipes.length != 0) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(recipes));
    } else {
      invalidServingError = {"message": `There are no recipes with ${servingSize} servings`}
      res.setHeader("Content-Type", "application/json");
      res.status(404).send(JSON.stringify(invalidServingError));
    }
  }
});

//////// async helper functions\

let recipesByFoodType = async (food, attributes) => {
  let recipes = await Recipe.findAll({ where: {foodType: food}, attributes: attributes })
    .then(recipes => {
      return recipes;
    })
    .catch(error => {
      return error
    });
  return recipes;
}

let recipesByServingSize = async (servings, attributes) => {
  let recipes = await Recipe.findAll({ where: {yield: servings}, attributes: attributes })
    .then(recipes => {
      return recipes;
    })
    .catch(error => {
      return error
    });
  return recipes;
}

module.exports = router;
