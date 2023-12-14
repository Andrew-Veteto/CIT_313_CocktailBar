import React, { useState, useEffect } from "react";
import CocktailsDetails from '../CocktailsDetails/CocktailsDetails'
import { nanoid } from "nanoid";
import axios from 'axios'
import { Link } from "react-router-dom";

function CocktailsList(props) {

  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const loadCocktailsInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/cocktails/${props.cocktailName}`)
        console.log(response.data)
        setCocktails(() => [...response.data])
      }

      catch (error) {
        console.log('Error!')

      }
    }

    loadCocktailsInfo();

  }, [props.cocktailName]);

  const cocktailInfo = cocktails.map((cocktail) => (<CocktailsDetails

    key={nanoid()}
    id={nanoid()}
    cocktail={cocktail} />

  ));

  return (
    <div>
      <Link to={`/detail/${props.cocktailName}`}>
        <div class="card" style={{ "width": "18rem" }}>
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div class="card-body">
            <h5 class="card-title">{props.cocktailName}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CocktailsList;
