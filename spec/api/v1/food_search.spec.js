var request = require("supertest")
var app = require("../../../app")
const express = require("express");
var router = express.Router();

describe('api', () => {
  describe ("test the root path", () => {
    test("should return a 202 status", () => {
      return request(app).get("/").then(response => {
        expect(response.statusCode).toBe(200);
      })
    })
  })

  describe ("test the food search endpoint", () => {
    test("should return a 202 status and all recipes", () => {
      recipeValues =  [ 'id', 'foodType', 'recipeName', 'thumbnailImg', 'ingredientNum', 'prepTime', 'ingredients', 'calories', 'url', 'dietLabel', 'healthLabel', 'cautions', 'fat', 'carbs', 'protein', 'yield' ]
      return request(app).get("/api/v1/recipes/food_search?q=chicken")
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Object.keys(response.body).length).toEqual(10)
        expect(Object.keys(response.body[0])).toEqual(recipeValues)
        expect(Object.keys(response.body[9])).toEqual(recipeValues)
      })
    })
  })

  //////// sad path testing

  describe ("test the food search endpoint with empty parameter", () => {
    test("should return a 404 status and an error for missing parameter", () => {
      return request(app).get("/api/v1/recipes/food_search")
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({"message": "Missing query parameter"})
      })
    })
  })

  describe ("test the food search endpoint with an invalid recipe", () => {
    test("should return a 404 status and error message for no matching recipes", () => {
      return request(app).get("/api/v1/recipes/food_search?q=walnuts")
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({"message": "There are no recipes with that food type"})
      })
    })
  })
})
