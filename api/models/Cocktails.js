const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientsSchema = new Schema({
    unit: String,
    amount: Number,
    ingredient: String,
    label: String,
    special: String
});


const CocktailSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    glass: {
        type: String,
        required: true
    },
    ingredients: [IngredientsSchema],
    category: {
        type: String,
        required: true 
    },
    garnish: {
        type: String,
        required: true 
    },
    preparation: {
        type: String,
        required: true 
    }
});

mongoose.model('cocktails', CocktailSchema);