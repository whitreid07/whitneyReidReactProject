import React from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import axios from "axios";

const API_KEY = "75eecf9cd01618fbec063a96b23ea54a";
const API_URL = "https://www.food2fork.com/api/search"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }
  getRecipe = e => {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;

    axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: recipeName
      }
    })
      .then(res => {
        console.log(res.data.recipes)
        this.setState({
          recipes: res.data.recipes
        })
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search App 🍽 </h1>
          <h4>Type in a word to get a delicious recipe!</h4>
          <Form getRecipe={this.getRecipe} />
        </header>
        <Recipes recipes={this.state.recipes} />
        <footer className="recipe_footer">
          <p className="footer_copy">&copy; 2019 Whitney Reid</p>
        </footer>
      </div>
    );
  }
}

export default App;