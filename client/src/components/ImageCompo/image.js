import React from 'react';

const CocktailImage = ({ imageUrl, cocktailName }) => {

  console.log(imageUrl);

  return (
    <div>
      <img className="img-thumbnail" src={imageUrl} alt={cocktailName} />
    </div>
  );
};

export default CocktailImage;