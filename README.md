# edamam_microservice

An API for supplying recipes and recipe data using Node.Js and Express using the edamam api.

## Setup

* Download this project into a working directory.

* Install the requirements using npm:
> npm install

  This will install the required pacakges for the project.

* Create and migrate the local database using sequelize:
> npx sequelize db:create
> npx sequelize db:migrate

* As an Express app, you are able to start the server using the following command:

> npm start

* This application is deployed [here](https://dashboard.heroku.com/apps/sheltered-fortress-37448).
* The project board for this application is located [here](https://github.com/davehardy632/quantified_self/projects/1).

## Endpoints


The following endpoints are exposed on this API:

* /api/v1/recipes
* /api/v1/recipes/food_search
* /api/v1/recipes/calorie_search
* /api/v1/recipes/lowest_prep_time
* /api/v1/recipes/lowest_ingredient_num
* /api/v1/recipes/servings_search

#### /api/v1/recipes
This endpoint takes a get request. If a get request is sent, it returns a list of all recipe items in the database, and an error message if no items are present in the database.

#### /api/v1/recipes/food_search?q=chicken
This endpoint takes a get request and a query parameter as displayed above. If a get request is sent with a query parameter that matches recipes in the database, it returns a list of those recipes with the query parameter as the main ingredient, an error message is returned there are no recipes matching the query parameter in the database.

#### /api/v1/recipes/calorie_search?q=3000
This endpoint takes a get request with a query parameter of calorie amount, and it returns 3 recipes with the closest calorie amount to the one in the query parameter.

#### /api/v1/recipes/lowest_prep_time
This endpoint takes a get request and will return all the recipes in the database ordered by the amount of time it takes to prepare the meal. It goes from lowest to highest

#### /api/v1/recipes/lowest_ingredient_num
This endpoint takes a get request and will return all the recipes in the database ordered by the number of ingredients that are in each recipe. It goes from lowest to highest.

#### /api/v1/recipes/servings_search?q=5
This endpoint takes a get request and a query parameter formatted as the url above. This will return all recipes that match the amount of servings in the query parameter. If there are no recipes with that amount of servings, an error message will be returned.
