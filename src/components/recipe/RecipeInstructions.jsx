import React from 'react'
import { List } from 'semantic-ui-react';
// import './RecipeInstructions.css';

const RecipeInstructions = (props) => (
  <List ordered relaxed>
    {/* <a>Ingredients</a> */}
    {props.instructions.map(i => {
        return <List.Item>{i.step_number}  {i.instructions}</List.Item>
    })}
  </List>
)

export default RecipeInstructions
