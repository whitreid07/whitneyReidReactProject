import React from "react";

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <input className="form_input" type="text" name="recipeName" placeholder="pizza" />
    <button className="form_button">Find Recipe!</button>
  </form>

);

export default Form;
