const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('models/Cocktails');
const Cocktail = mongoose.model('cocktails');

router.get('/', (req,res) =>{
    res.send('Cocktails API')
});

// Returns all cocktails
router.get('/cocktails', async(req, res) =>{
    const filter = {};
    const cocktails = await Cocktail.find(filter);
    cocktailsArray = []
    for (i in cocktails) {
        cocktail = {name: cocktails[i].name, image: cocktails[i].image, glass: cocktails[i].glass, category: cocktails[i].category, garnish: cocktails[i].garnish, preparation: cocktails[i].preparation, ingredients: cocktails[i].ingredients}
        cocktailsArray.push(cocktail)
    }
    res.json(cocktailsArray);
    console.log(cocktailsArray);
});

// Returns cocktail based on name
router.get('/cocktails/:name', async(req, res) =>{
    const name = req.params.name;

    const regExpression = new RegExp(name, 'i');
    const regexfilter = {"name": {$regex: regExpression}}
    const cocktails = await Cocktail.find(regexfilter);

    cocktailsArray = []

    for (i in cocktails) {
        cocktail = {name: cocktails[i].name, image: cocktails[i].image, glass: cocktails[i].glass, category: cocktails[i].category, garnish: cocktails[i].garnish, preparation: cocktails[i].preparation, ingredients: cocktails[i].ingredients}
        cocktailsArray.push(cocktail)
    }

    res.json(cocktailsArray);

    console.log(cocktailsArray);
});

// Returns cocktails based on category in order
router.get('/categories', async(req, res) =>{
    const cocktailsCategory = await Cocktail.distinct('category');
    cocktailsArray = []
    for (const category of cocktailsCategory) {
        // Fetch cocktails for a specific category
        const cocktails = await Cocktail.find({ category }).select(
          'name image glass category garnish preparation ingredients'
        );
        // Construct an array of formatted cocktail objects for the category
        const formattedCocktails = cocktails.map(cocktail => ({
          name: cocktail.name,
          image: cocktail.image,
          glass: cocktail.glass,
          category: cocktail.category,
          garnish: cocktail.garnish,
          preparation: cocktail.preparation,
          ingredients: cocktail.ingredients
        }));
        cocktailsArray.push(...formattedCocktails); // Push formatted cocktails to the cocktailsArray
      }

    res.json(cocktailsArray);
});

// Returns cocktails based on category
router.get('/cocktails/category/:category', async(req, res) =>{
    const category = req.params.category;
    const regExpression = new RegExp(category, 'i');
    const regexfilter = {"category": {$regex: regExpression}}
    const cocktails = await Cocktail.find(regexfilter);
    cocktailsArray = []
    for (i in cocktails) {
        cocktail = {name: cocktails[i].name, image: cocktails[i].image, glass: cocktails[i].glass, category: cocktails[i].category, garnish: cocktails[i].garnish, preparation: cocktails[i].preparation, ingredients: cocktails[i].ingredients}
        cocktailsArray.push(cocktail)
    }
    res.json(cocktailsArray);
    console.log(cocktailsArray);
});

// Returns cocktails based on glass in order
router.get('/glasses', async(req, res) =>{
    const cocktailsGlass = await Cocktail.distinct('glass');
    cocktailsArray = []
    for (const cocktailGlass of cocktailsGlass) {
        // Fetch cocktails with a specific glass type
        const cocktails = await Cocktail.find({ glass: cocktailGlass }).select(
          'name image glass category garnish preparation ingredients'
        );
  
        // Construct an array of formatted cocktail objects
        const formattedCocktails = cocktails.map(cocktail => ({
          name: cocktail.name,
          image: cocktail.image,
          glass: cocktail.glass,
          category: cocktail.category,
          garnish: cocktail.garnish,
          preparation: cocktail.preparation,
          ingredients: cocktail.ingredients
        }));
  
        cocktailsArray.push(...formattedCocktails); // Push formatted cocktails to the cocktailsArray
      }
    res.json(cocktailsArray);
});

// Returns cocktail based on glass
router.get('/glass/:glass', async(req, res) =>{
    const glass = req.params.glass;
    const regExpression = new RegExp(glass, 'i');
    const regexfilter = {"glass": {$regex: regExpression}}
    const cocktails = await Cocktail.find(regexfilter);
    cocktailsArray = []
    for (i in cocktails) {
        cocktail = {name: cocktails[i].name, image: cocktails[i].image, glass: cocktails[i].glass, category: cocktails[i].category, garnish: cocktails[i].garnish, preparation: cocktails[i].preparation, ingredients: cocktails[i].ingredients}
        cocktailsArray.push(cocktail)
    }
    res.json(cocktailsArray);
    console.log(cocktailsArray);
});

// Returns cocktails based on how many you should have
router.get('/limit/:limit', async(req, res) =>{
    const limit = parseInt(req.params.limit);
    const cocktails = await Cocktail.find().limit(limit);

    cocktailsArray = []

    for (i in cocktails) {
        cocktail = {name: cocktails[i].name, image: cocktails[i].image, glass: cocktails[i].glass, category: cocktails[i].category, garnish: cocktails[i].garnish, preparation: cocktails[i].preparation, ingredients: cocktails[i].ingredients}
        cocktailsArray.push(cocktail)
    }

    res.json(cocktailsArray);

    console.log(cocktailsArray);
});

module.exports = router;