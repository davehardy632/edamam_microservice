var request = require("supertest")
var app = require("../../../app")
const express = require("express");
var router = express.Router();

describe('api', () => {
  describe ("api v1 ingredient num sort path", () => {
    test("should return a 202 status and all recipes sorted by number of ingredients", () => {
      recipeValues =  [ 'id', 'foodType', 'recipeName', 'thumbnailImg', 'ingredientNum', 'prepTime', 'ingredients', 'calories', 'url', 'dietLabel', 'healthLabel', 'cautions', 'fat', 'carbs', 'protein', 'yield' ]
      return request(app).get("/api/v1/recipes/lowest_ingredient_num")
      .then(response => {
        expect(response.statusCode).toBe(202);
        expect(Object.keys(response.body[0])).toEqual(recipeValues);
        expect(response.body[0]["ingredientNum"]).toEqual(3);
        expect(response.body[1]["ingredientNum"]).toEqual(3);
        expect(Object.keys(response.body[25])).toEqual(recipeValues);
      });
    });
  });
});
