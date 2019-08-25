var request = require("supertest")
var app = require("../../../app")
const express = require("express");
var router = express.Router();

describe('api', () => {
  describe ("api v1 calorie search path", () => {
    test("should return a 202 status and three recipes", () => {
      recipeValues =  [ 'id', 'foodType', 'recipeName', 'thumbnailImg', 'ingredientNum', 'prepTime', 'ingredients', 'calories', 'url', 'dietLabel', 'healthLabel', 'cautions', 'fat', 'carbs', 'protein', 'yield' ]
      return request(app).get("/api/v1/recipes/calorie_search?q=1000")
      .then(response => {
        expect(response.statusCode).toBe(202);
        expect(Object.keys(response.body).length).toEqual(3);
        expect(Object.keys(response.body[0])).toEqual(recipeValues);
        expect(Object.keys(response.body[2])).toEqual(recipeValues);
      });
    });

    test("should return a 406 status and an error for missing parameter", () => {
      return request(app).get("/api/v1/recipes/calorie_search")
      .then(response => {
        expect(response.statusCode).toBe(406);
        expect(response.body).toEqual({"error": "Invalid input."});
      });
    });

    test("should return a 406 status and error message for no matching recipes", () => {
      return request(app).get("/api/v1/recipes/calorie_search?q=walnuts")
      .then(response => {
        expect(response.statusCode).toBe(406);
        expect(response.body).toEqual({"error": "Invalid input."});
      })
    });
  });
});
