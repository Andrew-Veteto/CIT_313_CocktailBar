import React from 'react';

function CocktailIngredident (props) {

    const { ingredients } = props.cocktail

    return (
        <div className="card m-2">
            <div class="card-body">
                <div className="card-text">
                <h4>Ingredients:</h4>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <p>
                                {ingredient.unit ? <><strong>Unit:</strong> {ingredient.unit} <br /></> : undefined}
                                {ingredient.amount ? <><strong>Amount:</strong> {ingredient.amount}<br /></> : undefined}
                                {ingredient.ingredient ? <><strong>Ingredient:</strong> {ingredient.ingredient}<br /></> : undefined}
                                {ingredient.label ? <><strong>Label:</strong> {ingredient.label}<br /></> : undefined}
                                {ingredient.special ? <><strong>Special:</strong> {ingredient.special}</> : undefined}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CocktailIngredident