import React, {useEffect, useState} from "react";
import CocktailImage from '../ImageCompo/image'
import CocktailIngredident from "../IngredientCompo/Ingredident";
import { nanoid } from "nanoid";
import axios from 'axios'

function CocktailsDetails(props){
    const { glass, category, garnish, preparation, image, name} = props.cocktail
    const [cocktails, setCocktails] = useState ([])
    useEffect(() => {
        const loadCocktails = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/cocktails/${name}`)
            console.log(response.data)
            setCocktails(() => [...response.data])
        }

        catch (error) {
            console.log('Error!')
        }
        }
        loadCocktails();

    }, [name]);

    const cocktailRecipe = cocktails.map((cocktail) =>  (<CocktailIngredident
    
        key={nanoid()}
        id={nanoid()}
        cocktail={cocktail}/>
    
        ));
    
    return (
        <div className="row d-flex">
            <div className="col-sm-4 m-2 p-2"> 
                <div className="card m-2">
                    <CocktailImage imageUrl={`/images/${image}`} cocktailName={name} />
                    <div class="card-body">
                        <div className="card-text">
                            {glass ? <p><strong>Glass:</strong> {glass}</p> : undefined}
                            {category ? <p><strong>Category:</strong> {category}</p> : undefined}
                            {garnish ? <p><strong>Garnish:</strong> {garnish}</p> : undefined}
                            {preparation ? <p><strong>Preparation:</strong> {preparation}</p> : undefined}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 m-2 p-2">
              {cocktailRecipe}
            </div>
        </div>
      );
}

export default CocktailsDetails;