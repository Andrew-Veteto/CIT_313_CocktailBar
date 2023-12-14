import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { nanoid } from 'nanoid';
import CocktailImage from '../ImageCompo/image';
import CocktailIngredident from '../IngredientCompo/Ingredident';

function CocktailDetailPage() {

    const [cocktails, setCocktails] = useState([])
    const [details, setDetail] = useState()
    const params = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadCocktails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/cocktails/${params.name}`)
                console.log(response.data)

                setCocktails(() => [...response.data])
                console.log(response.data)
                setDetail(response.data)
                setLoading(false)
            }

            catch (error) {
                console.log('Error!')
            }
        }
        loadCocktails();

    }, [params]);

    const cocktailRecipe = cocktails.map((cocktail) => (<CocktailIngredident
        key={nanoid()}
        id={nanoid()}
        cocktail={cocktail} />
    ));


    if (!loading) {
        return (
            <div className="row d-flex">
                <div className="col-sm-4 m-2 p-2">
                    <div className="card m-2">
                        <CocktailImage imageUrl={`/images/${details[0].image}`} cocktailName={params.name} />
                    </div>
                </div>
                <div className="col-sm-4 m-2 p-2">
                    {cocktailRecipe}
                    <div className="card m-2">
                    <div class="card-body">
                        <div className="card-text">
                            <h4>Details:</h4>
                            <ul>
                                {details[0].glass ? <p><strong>Glass:</strong> {details[0].glass}</p> : undefined}
                                {details[0].category ? <p><strong>Category:</strong> {details[0].category}</p> : undefined}
                                {details[0].garnish ? <p><strong>Garnish:</strong> {details[0].garnish}</p> : undefined}
                                {details[0].preparation ? <p><strong>Preparation:</strong> {details[0].preparation}</p> : undefined}
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default CocktailDetailPage;