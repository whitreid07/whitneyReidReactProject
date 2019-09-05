import React from 'react';

const Recipes = props => (
  <div className="wrapper">
    <div className="container">
      {props.recipes.map((recipe, index) => {
        return (
          <div key={index} className="recipes_container" style={{ marginBottom: "4rem" }} >
            <div>
              <img
                className="recipe_box"
                src={recipe.image_url}
                alt={recipe.title} />
              <div className="recipe_text">
                <h5 className="recipes_title">{recipe.title.length < 15 ? `${recipe.title}` : `${recipe.title.substring(0, 15)}...`}</h5>
                <p className="recipes_subtitle">Publisher: <span className="recipes_publisher">{recipe.publisher.length < 15 ? `${recipe.publisher}` : `${recipe.title.substring(0, 10)}...`}</span></p>
              </div>
            </div>
            <button className="recipe_buttons">
              <a target="_blank" href={recipe.source_url}>Get Recipe!</a>

            </button>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes; 