var request = require("supertest")
var app = require("../../../app")
const express = require("express");
var router = express.Router();

describe('api', () => {
  describe ("api v1 cook time sort path", () => {
    test("should return a 202 status and all recipes", () => {
      recipeValues =  [ 'id', 'foodType', 'recipeName', 'thumbnailImg', 'ingredientNum', 'prepTime', 'ingredients', 'calories', 'url', 'dietLabel', 'healthLabel', 'cautions', 'fat', 'carbs', 'protein', 'yield' ]
      return request(app).get("/api/v1/recipes/lowest_prep_time")
      .then(response => {
        expect(response.statusCode).toBe(202);
        expect(Object.keys(response.body[0])).toEqual(recipeValues);
        expect(response.body[0]["prepTime"]).toEqual(15);
        expect(response.body[1]["prepTime"]).toEqual(25);
        expect(Object.keys(response.body[25])).toEqual(recipeValues);
      });
    });
  });
});
