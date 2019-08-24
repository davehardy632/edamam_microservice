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
      return request(app).get("/api/v1/recipes/food_search")
      .set('Accept', 'application/json')
      .then(response => {
        console.log(response.body)
        expect(response.statusCode).toBe(200);
        // expect(Object.keys(response.body[0])).toEqual(200);
      })
    })
  })
})
