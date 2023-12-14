var express = require('express');
var router = express.Router();
const moogoose = require('mongoose');
require('models/Cocktails');
const Cocktail = moogoose.model('cocktails');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const filter = {};
  const cocktails = await Cocktail.find();
  res.render('index', { title: 'Cocktails', cocktails: cocktails });
});


router.post('/', async (req, res) =>{
  console.log(req.body);
  const newCocktail = new Cocktail({}); 

  newCocktail.save()
  .then(()=> console.log('Document saved!!'))
  .then(() => res.redirect('/'))
  .catch((error) => console.error(error))

  res.redirect('/');
});

module.exports = router;