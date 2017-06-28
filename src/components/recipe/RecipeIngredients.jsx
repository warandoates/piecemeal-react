import React from 'react'
import { Image, Item, List } from 'semantic-ui-react';
import './RecipeIngredients.css';

const RecipeIngredients = (props) => (
  <List id='leest' ordered relaxed>
    {/* <a>Ingredients</a> */}
    {props.ingredients.map(i => {
        // return <List.Item>{i.amount}  {i.name}</List.Item>
        return (
          <div>
            <Item.Group>
              <Item>
                <Item.Image avatar size='tiny' src={i.image_url} />

                <Item.Content>
                  <Item.Header as='a'>{i._pivot_amount}   {i.name}</Item.Header>
                  {/* <Item.Meta>Description</Item.Meta> */}
                  <Item.Description>
                    {i.description}
                  </Item.Description>
                  {/* <Item.Extra>Additional Details</Item.Extra> */}
                </Item.Content>
              </Item>
            </Item.Group>
            {/* <Image avatar src={i.image_url} />
            <List.Content>
              <List.Header as='a'>{i.name}</List.Header>
              <List.Description>{i.description}
              </List.Description>
            </List.Content> */}
          </div>
      )
    })}
  </List>
)

export default RecipeIngredients
