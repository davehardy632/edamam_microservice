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

  describe ("test the servings search endpoint", () => {
    test("should return a 200 status and all recipes with that serving amount", () => {
      recipeValues =  [ 'id', 'foodType', 'recipeName', 'thumbnailImg', 'ingredientNum', 'prepTime', 'ingredients', 'calories', 'url', 'dietLabel', 'healthLabel', 'cautions', 'fat', 'carbs', 'protein', 'yield' ]
      return request(app).get("/api/v1/recipes/servings_search?q=6")
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Object.keys(response.body[0])).toEqual(recipeValues)
        expect(Object.keys(response.body[1])).toEqual(recipeValues)
        expect(Object.keys(response.body[2])).toEqual(recipeValues)
        expect(Object.keys(response.body[3])).toEqual(recipeValues)
        expect(Object.keys(response.body[4])).toEqual(recipeValues)
        expect(Object.keys(response.body[5])).toEqual(recipeValues)
        expect(response.body[0]['yield']).toEqual(6)
        expect(response.body[1]['yield']).toEqual(6)
        expect(response.body[2]['yield']).toEqual(6)
        expect(response.body[3]['yield']).toEqual(6)
        expect(response.body[4]['yield']).toEqual(6)
        expect(response.body[5]['yield']).toEqual(6)
      })
    })
  })

  //////// sad path testing

  describe ("test the servings search endpoint with empty parameter", () => {
    test("should return a 404 status and an error for missing parameter", () => {
      return request(app).get("/api/v1/recipes/servings_search")
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({"message": "Missing query parameter"})
      })
    })
  })

  describe ("test the food search endpoint with an invalid recipe", () => {
    test("should return a 404 status and error message for no matching recipes", () => {
      return request(app).get("/api/v1/recipes/servings_search?q=22")
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({"message": "There are no recipes with 22 servings"})
      })
    })
  })
})
